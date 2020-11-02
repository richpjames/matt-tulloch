interface Product {
  title: string;
  author: string;
  photos: number[];
  blurb: string;
  price: string;
  imagePath: string;
  id: string;
  slug: string;
  inventory: number;
  path: string;
  thumbnail: string;
}

interface Cart {
  addedIds: string[];
  quantityById: { [index as string]: string };
  shipping: Shipping;
  hasError: boolean;
  loading: false;
}

interface Shipping {
  region: string;
  price: number;
  priceId: string;
}

interface State {
  products: Products;
  videos: Videos;
  cart: Cart;
  shippingCosts: Shipping[];
  config: Config;
}

type byId<T> = { [id: string]: T };
type visibileIds = string[];
interface Products {
  byId: byId<Product>;
  visibleIds: visibileIds;
}

type Action =
  | "ADD_TO_CART"
  | "CHECKOUT_REQUEST"
  | "CHECKOUT_FAILURE"
  | "CHECKOUT_SUCCESS"
  | "REMOVE_FROM_CART"
  | "DECREMENT_IN_CART"
  | "SET_SHIPPING"
  | "LOADING_CHECKOUT"
  | "CHECKOUT_INITIALISE";

type InitialState = {
  cart: Cart;
  products: { byId: {}; visibleIds: [] };
  shippingCosts: Shipping[];
};
