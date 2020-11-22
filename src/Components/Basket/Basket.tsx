import React, { useContext, useState } from "react";
import styled from "styled-components/macro";

import { BasketListItem } from "./BasketListItem";
import { LoadingSpinner } from "../Common/LoadingSpinner";

import { ErrorText } from "../Common";
import { shippingCosts } from "../../constants";

import { BasketItems } from "./BasketItems";
import { CartContext } from "./CartProvider";

const BasketWrapper = styled.section`
  width: 60rem;
`;

const Basket = () => {
  const { cart, add, subtract, get, remove, total } = useContext<BasketContext>(
    CartContext
  );
  const loading = false;
  const [shipping, setShippingState] = useState(shippingCosts[0]);
  const setShipping = (id: number) => setShippingState(shippingCosts[id]);

  const isProduct = (cartItem: any) => cartItem.id !== "shipping";

  const basketItems = cart.filter(isProduct).map((product, index) => {
    const { title, price, inventory, slug, id, dimensions, image } = product[0];
    const quantity = get(id);
    return (
      <BasketListItem
        title={title}
        price={price}
        id={id}
        dimensions={dimensions}
        image={image}
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
      />
    );
  } else if (loading) {
    basketComponent = <LoadingSpinner />;
  }

  return <BasketWrapper>{basketComponent}</BasketWrapper>;
};
export default Basket;
