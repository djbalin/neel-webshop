// eslint-disable-next-line @typescript-eslint/no-var-requires
export const stripe = require("stripe")(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
);
