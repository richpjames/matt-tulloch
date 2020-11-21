const devShippingCosts = [
  { region: "UK", priceId: "price_1HoElhI7nlRkVz3TrARQePqM", price: 3 },
  {
    region: "Europe",
    priceId: "price_1HoElhI7nlRkVz3Tndw9kSoh",
    price: 4.2,
  },
  {
    region: "Rest Of The World",
    priceId: "price_1HoEyNI7nlRkVz3T8iKgWeXK",
    price: 6.2,
  },
];

const productionShippingCosts = [
  { region: "UK", priceId: "price_1HoEdKI7nlRkVz3TIUGsOewK", price: 3 },
  {
    region: "Europe",
    priceId: "price_1HoEdKI7nlRkVz3TgnK2CyMl",
    price: 4.2,
  },
  {
    region: "Rest Of The World",
    priceId: "price_1HoEymI7nlRkVz3TcNWy6vOE",
    price: 6.2,
  },
];

export const shippingCosts: Shipping[] =
  process.env.GATSBY_ENV === "production"
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

//STRIPE
export const stripePublishableKey =
  process.env.GATSBY_ENV === "production"
    ? process.env.GATSBY_PROD_STRIPE_PUBLISHABLE_KEY
    : process.env.GATSBY_DEV_STRIPE_PUBLISHABLE_KEY;
