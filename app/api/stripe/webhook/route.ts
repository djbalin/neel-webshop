import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { OrderConfirmationEmail } from "@/components/email-template";
import { resend } from "@/app/resend";
import { nodeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import { env } from "process";

async function sendOrderConfirmationEmail(recipient: string, amount: number) {

  console.log("Sending order confirmation email to", recipient);
  const { data, error } = await resend.emails.send({
    from: "Forlaget DIT <noreply@forlagetdit.dk>", // Change this to your verified domain
    to: [recipient],
    subject: "Ordrebekræftelse - Forlaget DIT",
    react: OrderConfirmationEmail({
      amount,
      customerEmail: recipient,
    }),
  });
  if (error) {
    console.error("Email error:", error);
    throw error;
  }
  console.log("Email sent successfully:", data);
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
    if (err! instanceof Error) console.log(err);
    console.log(`❌ Error message: ${errorMessage}`);
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 },
    );
  }

  // Successfully constructed event.
  console.log("✅ Success:", event.id);

  if (event.type === "checkout.session.completed") {
    console.log("✨ Checkout session completed:", event.data.object.id);
    try {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerEmail = session.customer_details?.email;
      const amount = session.amount_total;
      const orderId = session.id;

      if (!customerEmail) {
        console.error("No customer email found in checkout session");
        return NextResponse.json(
          { message: "No customer email found" },
          { status: 400 },
        );
      }

      if (!amount) {
        console.error("No amount found in checkout session");
        return NextResponse.json(
          { message: "No amount found" },
          { status: 400 },
        );
      }

      console.log(
        `💰 Order details - Email: ${customerEmail}, Amount: ${amount}, Order ID: ${orderId}`,
      );

      await sendOrderConfirmationEmail(customerEmail, amount);
    } catch (error) {
      console.error("Error in webhook handler:", error);
      return NextResponse.json(
        { message: "Webhook handler failed" },
        { status: 500 },
      );
    }
  } else {
    console.log(`ℹ️ Unhandled event: ${event.type}`);
    // Return 200 for unhandled events so Stripe doesn't retry
  }

  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: "Received" }, { status: 200 });
}
