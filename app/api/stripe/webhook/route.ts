import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  let event: Stripe.Event;

  try {
    // Read body as buffer to preserve exact bytes for signature verification
    // This is critical for Stripe webhook signature validation
    const buf = await req.arrayBuffer();
    const body = Buffer.from(buf);
    const stripeSignature = (await headers()).get("stripe-signature");

    console.log("🔍 Debug Info:");
    console.log("- Body length:", body.length);
    console.log("- Signature present:", !!stripeSignature);
    console.log(
      "- Webhook secret present:",
      !!process.env.STRIPE_WEBHOOK_SECRET,
    );
    console.log(
      "- Webhook secret prefix:",
      process.env.STRIPE_WEBHOOK_SECRET?.substring(0, 7),
    );

    if (!stripeSignature) {
      throw new Error("Missing stripe-signature header");
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error("Missing STRIPE_WEBHOOK_SECRET environment variable");
    }

    event = stripe.webhooks.constructEvent(
      body.toString("utf8"),
      stripeSignature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.log(`❌ Error message: ${errorMessage}`);
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 },
    );
  }

  // Successfully constructed event.
  console.log("✅ Success:", event.id);

  const permittedEvents: string[] = [
    "checkout.session.completed",
    "payment_intent.created",
    "payment_intent.succeeded",
    "payment_intent.payment_failed",
  ];

  if (permittedEvents.includes(event.type)) {
    let data;

    try {
      switch (event.type) {
        case "checkout.session.completed":
          data = event.data.object as Stripe.Checkout.Session;
          console.log(`💰 CheckoutSession status: ${data.payment_status}`);
          break;
        case "payment_intent.created":
          data = event.data.object as Stripe.PaymentIntent;
          console.log(`✨ PaymentIntent created: ${data.id}`);
          break;
        case "payment_intent.payment_failed":
          data = event.data.object as Stripe.PaymentIntent;
          console.log(`❌ Payment failed: ${data.last_payment_error?.message}`);
          break;
        case "payment_intent.succeeded":
          data = event.data.object as Stripe.PaymentIntent;
          console.log(`💰 PaymentIntent status: ${data.status}`);
          break;
        default:
          throw new Error(`Unhandled event: ${event.type}`);
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Webhook handler failed" },
        { status: 500 },
      );
    }
  }

  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: "Received" }, { status: 200 });
}
