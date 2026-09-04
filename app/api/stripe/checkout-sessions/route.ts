import { PROD_DOMAIN, DEV_DOMAIN } from "@/app/constants";
import { stripe } from "@/app/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const URL = process.env.NODE_ENV === "production" ? PROD_DOMAIN : DEV_DOMAIN;
const IS_PROD = process.env.NODE_ENV === "production";

type Product = "facet" | "komplet";

const PRICE_IDS: Record<Product, { dev: string; prod: string }> = {
  facet: {
    dev: "price_1RHnljRrN8SMS2hTFbQ7wrNp",
    prod: "price_1ROm5sRrN8SMS2hTIcAeR199",
  },
  komplet: {
    dev: "price_1UBuM4RrN8SMS2hTVOh5lnbX",
    prod: "REPLACE_WITH_KOMPLET_PROD_PRICE_ID",
  },
};

function getPriceId(product: Product): string {
  return IS_PROD ? PRICE_IDS[product].prod : PRICE_IDS[product].dev;
}

const SHIPPING_ID = IS_PROD
  ? "shr_1ROmGlRrN8SMS2hT0GhqEvLq"
  : "shr_1RTj07RrN8SMS2hTXI2DpH0c";

function parseQuantity(value: FormDataEntryValue | null): number {
  if (value == null) return 0;
  const parsed = parseInt(value as string, 10);
  return Number.isNaN(parsed) || parsed < 0 ? 0 : parsed;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const formdata = await req.formData();

    const locale = formdata.get("locale");
    const localeParsedAsLocale =
      locale as Stripe.Checkout.SessionCreateParams.Locale;

    if (!locale) {
      return new Response("Incorrectly formatted request", { status: 400 });
    }

    const returnBase = locale === "en" ? "/en/return" : "/return";

    // Per-product quantities. Falls back to the legacy single `product` +
    // `quantity` fields (still used by the English cart page).
    const quantities: Record<Product, number> = {
      facet: parseQuantity(formdata.get("facetQuantity")),
      komplet: parseQuantity(formdata.get("kompletQuantity")),
    };

    const legacyProduct = formdata.get("product") as string | null;
    const legacyQuantity = formdata.get("quantity");
    if (legacyProduct && legacyQuantity != null) {
      if (legacyProduct !== "facet" && legacyProduct !== "komplet") {
        return new Response("Unknown product", { status: 400 });
      }
      quantities[legacyProduct] += parseQuantity(legacyQuantity);
    }

    const line_items = (Object.keys(quantities) as Product[])
      .filter((product) => quantities[product] > 0)
      .map((product) => ({
        price: getPriceId(product),
        quantity: quantities[product],
      }));

    if (line_items.length === 0) {
      return new Response("Cart is empty", { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      locale: localeParsedAsLocale,

      line_items,
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
      success_url: `${URL}${returnBase}/?success=true`,
      cancel_url: `${URL}${returnBase}/?canceled=true`,
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
