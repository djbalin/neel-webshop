import "server-only";

import Stripe from "stripe";
if (!process.env.STRIPE_SECRET_KEY) {
  console.log(process.env);
  throw new Error("STRIPE_SECRET_KEY is not set");
}
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
