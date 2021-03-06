const SUPPORTED_LOCATIONS = require("./constants");
const devStripe = require("stripe")(process.env.GATSBY_DEV_STRIPE_SECRET_KEY);
const prodStripe = require("stripe")(process.env.GATSBY_PROD_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const { lineItems, env } = data;
  console.log(JSON.parse(event.body));
  let stripe = devStripe;
  let publishableKey = process.env.GATSBY_DEV_STRIPE_PUBLISHABLE_KEY;

  if (env === "production") {
    stripe = prodStripe;
    publishableKey = process.env.GATSBY_PROD_STRIPE_PUBLISHABLE_KEY;
  }
  console.log(
    "node",
    process.env.NODE_ENV,
    "gatsby",
    process.env.GATSBY_ENV,
    " stripe",
    stripe
  );
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: SUPPORTED_LOCATIONS,
      },
      success_url: `${process.env.URL}/success`,
      cancel_url: process.env.URL,

      line_items: lineItems.map((product) => {
        const validatedQuantity =
          product.quantity > 0 && product.quantity < 11 ? product.quantity : 1;

        const lineItem = {
          price: product.price,
          quantity: validatedQuantity,
        };
        return lineItem;
      }),
    });
    console.log(session, "session");
    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        publishableKey: publishableKey,
      }),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: e,
    };
  }
};
