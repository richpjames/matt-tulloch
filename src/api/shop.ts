import { getDevProducts } from "./devProducts";
import { getProdProducts } from "./prodProducts";
import { handleCheckout } from "./stripe-purchase";

export default {
  getProducts:
    process.env.NODE_ENV === "production" ? getProdProducts : getDevProducts,
  buyProducts: handleCheckout,
};
