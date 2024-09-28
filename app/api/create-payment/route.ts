import console from "console";

export async function GET() {
  if (!process.env.NEXT_PUBLIC_NETS_SECRET_KEY) {
    return new Response("Something went wrong, env not there", { status: 500 });
  }

  const redirect_to_checkout = function (json: any) {
    console.log(json);

    const url = json.hostedPaymentPageUrl;
    if (!url) {
      console.error("Key hostedPaymentPageUrl not found");
      return new Response("Key hostedPaymentPageUrl not found", {
        status: 500,
      });
    }
    const lang = "da-DK"; // Default language
    return Response.redirect(`${url}&language=${lang}`);
    // url + "&language=" + res.redirect(url + "&language=" + lang);
  };

  const options = {
    method: "POST",
    hostname: "test.api.dibspayment.eu",
    port: null,
    path: "/v1/payments",
    headers: {
      "content-type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_NETS_SECRET_KEY,
    },
    body: JSON.stringify(PAYLOAD),
  };

  try {
    const req = new Request(
      "https://test.api.dibspayment.eu/v1/payments",
      options
    );

    const res = await fetch(req);
    console.log(res.ok);
    const json = await res.json();
    console.log(json);
    return redirect_to_checkout(json);
    // return new Response("ok");

    // return res;
    // return Response.redirect("https://localhost:3000", 303);
  } catch (error) {
    console.log("________________ Oh no");
    console.log(error);

    return new Response("Something went wrong", { status: 500 });
  }
}
// export async function GET() {
//   console.log("GET REQ CALLED HERE");
//   if (!process.env.NEXT_PUBLIC_NETS_SECRET_KEY) {
//     return new Response("Something went wrong, env not there", { status: 500 });
//   }

//   const options = {
//     method: "POST",
//     hostname: "test.api.dibspayment.eu",
//     port: null,
//     path: "/v1/payments",
//     headers: {
//       "content-type": "application/json",
//       Authorization: process.env.NEXT_PUBLIC_NETS_SECRET_KEY,
//     },
//     body: JSON.stringify(PAYLOAD),
//   };

//   try {
//     const req = new Request(
//       "https://test.api.dibspayment.eu/v1/payments",
//       options
//     );

//     const res = await fetch(req);
//     console.log(res);

//     return res;
//   } catch (error) {
//     console.log("________________ Oh no");
//     console.log(error);

//     return new Response("Something went wrong", { status: 500 });
//   }
// }

const PAYLOAD = {
  checkout: {
    integrationType: "HostedPaymentPage",
    returnUrl: "http://localhost:3000/shop/cart",
    termsUrl: "http://localhost:3000/",
  },
  // checkout: {
  //   integrationType: "EmbeddedCheckout",
  //   url: "https://localhost:3000/shop/checkout",
  //   termsUrl: "https://localhost:3000/",
  // },
  order: {
    items: [
      {
        reference: "ref42",
        name: "Demo product",
        quantity: 2,
        unit: "pcs",
        unitPrice: 80000,
        grossTotalAmount: 160000,
        netTotalAmount: 160000,
      },
      {
        reference: "discount",
        name: "Demo discount",
        quantity: 1,
        unit: "pcs",
        unitPrice: -20000,
        grossTotalAmount: -20000,
        netTotalAmount: -20000,
      },
    ],
    amount: 140000,
    currency: "SEK",
    reference: "Demo Order",
  },
};
