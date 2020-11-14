import React from "react";
import styled from "styled-components/macro";

import { CheckoutSection } from "./CheckoutSection";

const EmptyCartMessage = styled.p`
  padding-top: 15%;
  text-align: center;
`;

const BasketItemsSection = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
`;

type BasketItemsProps = {
  hasItems: boolean;
  basketItems: JSX.Element[];
  shipping: Shipping;
  setShipping: (index: number) => void;
  total: number;
  onCheckoutClicked: (click: React.MouseEvent) => void;
};

export const BasketItems: React.FC<BasketItemsProps> = ({
  basketItems,
  hasItems,
  onCheckoutClicked,
  setShipping,
  shipping,
  total,
}) => {
  const hasProducts = basketItems?.length > 0;

  return hasProducts ? (
    <>
      <BasketItemsSection>{basketItems}</BasketItemsSection>
      <CheckoutSection
        hasItems={hasItems}
        onCheckoutClicked={onCheckoutClicked}
        setShipping={setShipping}
        shipping={shipping}
        total={total}
      />
    </>
  ) : (
    <EmptyCartMessage>
      Your basket is empty
      <br />
      <span role="img" aria-label="unhappy face">
        😢
      </span>
    </EmptyCartMessage>
  );
};
