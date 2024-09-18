// This is your test secret API key.

import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";

const YOUR_DOMAIN = "http://localhost:3000";

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      locale: "da",
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1Pz1I7RrN8SMS2hT6dKlBeLi",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/?success=true`,
      cancel_url: `${YOUR_DOMAIN}/?canceled=true`,
    });

    return Response.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      {
        message: err,
      },
      { status: 500 }
    );
  }

  //   res.redirect(303, session.url);
}
