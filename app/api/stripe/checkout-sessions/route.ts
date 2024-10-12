import { stripe } from "@/app/stripe";
import console from "console";
import { NextResponse } from "next/server";

const YOUR_DOMAIN = "http://localhost:3000";

export async function POST(req: Request) {
  try {
    console.log("REQUEST:");
    console.log(req);

    const formdata = await req.formData();
    console.log(formdata);

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
          price: "price_1Pz1I7RrN8SMS2hT6dKlBeLi",
          quantity: quantity,
        },
      ],
      phone_number_collection: {
        enabled: true,
      },

      mode: "payment",
      success_url: `${YOUR_DOMAIN}/return/?success=true`,
      cancel_url: `${YOUR_DOMAIN}/return/?canceled=true`,
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
