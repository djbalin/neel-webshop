import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import {
  OrderConfirmationEmail,
  type OrderConfirmationEmailProps,
} from "@/components/email-template";
import { resend } from "@/app/resend";
import { devLog } from "@/app/devLog";

const ORDER_CONFIRMATION_FROM_EMAIL = "Forlaget DIT <noreply@forlagetdit.dk>";
const ORDER_CONFIRMATION_REPLY_TO = "forlagetdit@gmail.com";

function normalizeLocale(
  locale: Stripe.Checkout.Session.Locale | null | undefined,
): "da" | "en" {
  return locale === "en" ? "en" : "da";
}

function formatOrderReference(orderId: string) {
  return orderId.slice(-8).toUpperCase();
}

function buildEmailSubject(order: OrderConfirmationEmailProps) {
  return order.locale === "en"
    ? `Order confirmation #${order.orderReference} - Forlaget DIT`
    : `Ordrebekraeftelse #${order.orderReference} - Forlaget DIT`;
}

async function getOrderConfirmationData(
  session: Stripe.Checkout.Session,
): Promise<OrderConfirmationEmailProps> {
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 100,
  });

  const customerEmail =
    session.customer_details?.email ?? session.customer_email;
  if (!customerEmail) {
    throw new Error("No customer email found in checkout session");
  }

  if (session.amount_total == null) {
    throw new Error("No amount found in checkout session");
  }

  return {
    locale: normalizeLocale(session.locale),
    orderId: session.id,
    orderReference: formatOrderReference(session.id),
    customerEmail,
    customerName: session.customer_details?.name,
    customerPhone: session.customer_details?.phone,
    shippingName: session.shipping_details?.name,
    shippingAddress:
      session.shipping_details?.address ?? session.customer_details?.address,
    currency: session.currency,
    subtotalAmount: session.amount_subtotal,
    shippingAmount: session.total_details?.amount_shipping,
    taxAmount: session.total_details?.amount_tax,
    totalAmount: session.amount_total,
    items: lineItems.data.map((item) => ({
      description: item.description ?? "Item",
      quantity: item.quantity,
      totalAmount: item.amount_total ?? item.amount_subtotal,
    })),
  };
}

async function sendOrderConfirmationEmail(
  recipient: string,
  order: OrderConfirmationEmailProps,
) {
  devLog("Sending order confirmation email to", recipient);
  const { data, error } = await resend.emails.send(
    {
      from: ORDER_CONFIRMATION_FROM_EMAIL,
      to: [recipient],
      replyTo: ORDER_CONFIRMATION_REPLY_TO,
      subject: buildEmailSubject(order),
      react: OrderConfirmationEmail(order),
    },
    {
      idempotencyKey: `order-confirmation/${order.orderId}`,
    },
  );
  if (error) {
    console.error("Email error:", error);
    throw error;
  }
  devLog("Email sent successfully:", data);
  return data;
}

export async function POST(req: Request) {
  let event: Stripe.Event;

  try {
    const stripeSignature = (await headers()).get("stripe-signature");
    if (!stripeSignature) {
      return NextResponse.json(
        { message: "No stripe-signature header" },
        { status: 400 },
      );
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json(
        { message: "No STRIPE_WEBHOOK_SECRET environment variable" },
        { status: 400 },
      );
    }

    const body = await req.text();

    event = stripe.webhooks.constructEvent(
      body,
      stripeSignature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    // On error, log and return the error message.
    if (!(err instanceof Error)) devLog(err);
    devLog(`❌ Error message: ${errorMessage}`);
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 },
    );
  }

  // Successfully constructed event.
  devLog("✅ Success:", event.id);

  if (event.type === "checkout.session.completed") {
    devLog("✨ Checkout session completed:", event.data.object.id);
    try {
      const session = event.data.object as Stripe.Checkout.Session;
      const order = await getOrderConfirmationData(session);

      devLog(
        `💰 Order details - Email: ${order.customerEmail}, Amount: ${order.totalAmount}, Order ID: ${order.orderId}`,
      );

      await sendOrderConfirmationEmail(order.customerEmail, order);
    } catch (error) {
      console.error("Error in webhook handler:", error);
      return NextResponse.json(
        { message: "Webhook handler failed" },
        { status: 500 },
      );
    }
  } else {
    devLog(`ℹ️ Unhandled event: ${event.type}`);
    // Return 200 for unhandled events so Stripe doesn't retry
  }

  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: "Received" }, { status: 200 });
}
