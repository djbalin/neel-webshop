import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

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

  if (event.type === "payment_intent.created") {
    console.log("✨ PaymentIntent created:", event.data.object);
    try {
      const data = event.data.object;
      console.log(`💰 CheckoutSession status: ${data.amount}`);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Webhook handler failed" },
        { status: 500 },
      );
    }
  } else {
    console.log(`❌ Unhandled event: ${event.type}`);
    return NextResponse.json(
      { message: `Unhandled event: ${event.type}` },
      { status: 400 },
    );
  }

  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: "Received" }, { status: 200 });
}
