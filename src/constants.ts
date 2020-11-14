const devShippingCosts = [
  { region: "UK", priceId: "price_1HMwTgJs9ciiqN7OnYGR5rOp", price: 2.5 },
  {
    region: "Europe",
    priceId: "price_1HMwTgJs9ciiqN7OwbLHDoty",
    price: 4,
  },
  {
    region: "Rest Of The World",
    priceId: "price_1HMwTgJs9ciiqN7OBWk2Jv6a",
    price: 5,
  },
];

const productionShippingCosts = [
  { region: "UK", priceId: "price_1HOpaOJs9ciiqN7OcNEPQA7G", price: 2.5 },
  {
    region: "Europe",
    priceId: "price_1HOpaOJs9ciiqN7OcRyOPBkG",
    price: 4,
  },
  {
    region: "Rest Of The World",
    priceId: "price_1HOpaOJs9ciiqN7Oxtqh00zC",
    price: 5,
  },
];

export const shippingCosts: Shipping[] =
  process.env.NODE_ENV === "production"
    ? productionShippingCosts
    : devShippingCosts;

//COLOUR USAGE
export const text = "#37353a";
export const background = "#fefefe";

//URLS
export const mainImageUrl = `https://www.monitorbooks.co.uk/img/`;

//IMAGES
export const productPageImageHeight = "15vw";
export const productPageImageWidth = "auto";

export const introTimer = 4;

//STRIPE
export const stripePublishableKey =
  process.env.NODE_ENV === "production"
    ? process.env.GATSBY_PROD_STRIPE_PUBLISHABLE_KEY
    : process.env.GATSBY_DEV_STRIPE_PUBLISHABLE_KEY;
