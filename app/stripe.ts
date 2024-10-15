// eslint-disable-next-line @typescript-eslint/no-var-requires
export const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
