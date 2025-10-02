import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { EmailTemplate } from "@/components/email-template";
import { resend } from "@/app/resend";

async function sendEmail(recipient: string) {
  console.log("Sending email to", recipient);
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [recipient],
    subject: "Hello world",
    react: EmailTemplate({ firstName: "John" }),
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

  if (event.type === "charge.succeeded") {
    console.log("✨ Charge succeeded created:", event.data.object);
    try {
      const data = event.data.object;
      console.log(`💰 Charge succeeded amount: ${data.amount}`);
      void sendEmail("jgbalin@gmail.com");
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
