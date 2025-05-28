import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";

const DEV_DOMAIN = "http://localhost:3000";
const PROD_DOMAIN = "https://www.forlagetdit.dk";

const URL = process.env.NODE_ENV === "production" ? PROD_DOMAIN : DEV_DOMAIN;
const PRICE_ID =
  process.env.NODE_ENV === "development"
    ? "price_1RHnljRrN8SMS2hTFbQ7wrNp"
    : "price_1RP8mWRrN8SMS2hT7HgPkzEd";

const SHIPPING_ID =
  process.env.NODE_ENV === "development"
    ? "shr_1RTj07RrN8SMS2hTXI2DpH0c"
    : "shr_1ROmGlRrN8SMS2hT0GhqEvLq";

export async function POST(req: Request) {
  try {
    // console.log("REQUEST:");
    // console.log(req);

    const formdata = await req.formData();
    // console.log(formdata);

    const quantity = formdata.get("quantity");
    const locale = formdata.get("locale");

    if (!quantity || !locale) {
      return new Response("Incorrectly formatted request", { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      locale: locale,
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: PRICE_ID,
          quantity: quantity,
        },
      ],
      automatic_tax: {
        enabled: true,
      },
      custom_text: {
        // shipping_address: { message: "Leveringsadresse" },
        // submit: { message: "Betal" },
        after_submit: {
          message: "Du modtager en ordrebekræftelse via e-mail.",
        },
      },
      phone_number_collection: {
        enabled: true,
      },

      shipping_options: [
        {
          shipping_rate: SHIPPING_ID,
        },
      ],

      shipping_address_collection: {
        allowed_countries: ["DK"],
      },

      payment_intent_data: {
        capture_method: "manual",
      },

      mode: "payment",
      success_url: `${URL}/return/?success=true`,
      cancel_url: `${URL}/return/?canceled=true`,
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
}
