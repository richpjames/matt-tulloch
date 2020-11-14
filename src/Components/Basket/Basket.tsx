import React, { useContext, useState } from "react";

import { BasketListItem } from "./BasketListItem";
import { LoadingSpinner } from "../Common/LoadingSpinner";

import { PageWrapper, ErrorText } from "../Common";
import { ListTitle } from "../Common/ListComponents";
import { shippingCosts, initialShipping } from "../../constants";

import { BasketItems } from "./BasketItems";
import { CartContext } from "./CartProvider";

interface BasketContext {
  contents: [[sku, number]];
  cart: [[sku, number]];
  add: (id: string) => void;
  subtract: (id: string) => void;
  get: (id: string) => number;
  set: (id: string) => void;
  remove: (id: string) => void;
  count: number;
  total: number;
}
type sku = {
  priceId: string;
  price: number;
  title: string;
  inventory: number;
  slug: string;
  id: string;
  dimensions: string;
};

const Basket = () => {
  const { cart, add, subtract, get, remove, total } = useContext<BasketContext>(
    CartContext
  );
  const loading = false;
  const [shipping, setShippingState] = useState(shippingCosts[0]);
  const setShipping = (id: number) => setShippingState(shippingCosts[id]);

  const isProduct = (cartItem: any) => cartItem.id !== "shipping";

  const basketItems = cart.filter(isProduct).map((product, index) => {
    const { title, price, inventory, slug, id, dimensions } = product[0];
    const quantity = get(id);
    return (
      <BasketListItem
        title={title}
        price={price}
        id={id}
        dimensions={dimensions}
        // imageSrc={`${mainImageUrl}${slug}/thumbnails/${slug}`}
        stock={inventory}
        quantity={quantity}
        addToBasket={add}
        decrementInCart={subtract}
        removeFromBasket={remove}
        key={index}
        index={index}
        slug={slug}
      />
    );
  });

  let basketComponent;
  if (!loading) {
    basketComponent = (
      <BasketItems
        basketItems={basketItems}
        hasItems={basketItems.length > 0}
        shipping={shipping}
        setShipping={setShipping}
        total={total}
        onCheckoutClicked={() => {}}
      />
    );
  } else if (loading) {
    basketComponent = <LoadingSpinner />;
  }


  return (
    <>
      <ListTitle>Basket</ListTitle>
      {basketComponent}
    </>
  );
};
export default Basket;
