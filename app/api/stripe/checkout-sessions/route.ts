import { PROD_DOMAIN, DEV_DOMAIN } from "@/app/constants";
import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const URL = process.env.NODE_ENV === "production" ? PROD_DOMAIN : DEV_DOMAIN;
const PRICE_ID =
  process.env.NODE_ENV === "production"
    ? "price_1ROm5sRrN8SMS2hTIcAeR199"
    : "price_1RHnljRrN8SMS2hTFbQ7wrNp";
const SHIPPING_ID =
  process.env.NODE_ENV === "production"
    ? "shr_1ROmGlRrN8SMS2hT0GhqEvLq"
    : "shr_1RTj07RrN8SMS2hTXI2DpH0c";

export async function POST(req: Request): Promise<Response> {
  try {
    const formdata = await req.formData();

    const quantity = formdata.get("quantity");
    const locale = formdata.get("locale");

    const quantityParsedAsNumber = parseInt(quantity as string, 10);
    const localeParsedAsLocale =
      locale as Stripe.Checkout.SessionCreateParams.Locale;

    if (!quantity || !locale || Number.isNaN(quantityParsedAsNumber)) {
      return new Response("Incorrectly formatted request", { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      locale: localeParsedAsLocale,

      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: PRICE_ID,
          quantity: quantityParsedAsNumber,
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
      allow_promotion_codes: true,
      mode: "payment",
      success_url: `${URL}/return/?success=true`,
      cancel_url: `${URL}/return/?canceled=true`,
    });

    if (!session.url) {
      return NextResponse.json(
        { message: "Failed to create checkout session - no URL returned" },
        { status: 500 },
      );
    }

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown Stripe checkout error";

    return NextResponse.json(
      {
        message,
      },
      { status: 500 },
    );
  }
}
