import { stripe } from "@/app/stripe";

export async function POST(req: Request) {
  console.log("REQ:________________");

  console.log(req);
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of
          // the product you want to sell
          price: "price_1Q0TPxRrN8SMS2hTt9PfT7Mc",
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `http://localhost:3000/shop/return?session_id={{CHECKOUT_SESSION_ID}}`,
    });

    return new Response(
      JSON.stringify({ clientSecret: session.client_secret }),
      {
        status: 200,
        statusText: "yeye",
      }
    );
  } catch (err) {
    console.log(err);

    return new Response(JSON.stringify({ message: "ERROR" }), {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  console.log("GET REQ:____________");

  console.log(req);

  return new Response("Get req", { status: 200 });
  //   try {
  //     const session = await stripe.checkout.sessions.retrieve(
  //       req.query.session_id
  //     );

  //     res.send({
  //       status: session.status,
  //       customer_email: session.customer_details.email,
  //     });
  //   } catch (err) {
  //     res.status(err.statusCode || 500).json(err.message);
  //   }
  //   break;
}
