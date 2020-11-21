import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

import { twoDecimalPlaces } from "../../utils";

import { CartContext } from "./CartProvider";
import { Shipping } from "./Shipping";
import { CTAButton } from "../Common";
import { BasketTotal } from "./BasketTotal";
import { stripePublishableKey } from "../../constants";

const CheckoutSectionWrap = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  setShipping: (index: number) => void;
  shipping: Shipping;
  hasItems: boolean;
}

export const CheckoutSection: React.FC<Props> = ({
  hasItems,
  setShipping,
  shipping,
}) => {
  const { cart, total } = useContext<BasketContext>(CartContext);

  const onCheckoutClicked = () => {
    const lineItems = JSON.stringify(
      cart.map(([sku, quantity]) => ({
        price: sku.id,
        quantity: `${quantity}`,
      }))
    );

    const stripePromise = loadStripe(stripePublishableKey || "");

    fetch("/.netlify/functions/create-checkout", {
      method: "POST",
      body: lineItems,
    })
      .then(async (response) => {
        const { sessionId } = await response.json();
        console.log("id", sessionId);
        typeof window !== undefined && localStorage.setItem("cart", "{}");
        const stripe = await stripePromise;
        if (stripe) {
          const stripeResponse = await stripe.redirectToCheckout({
            sessionId: sessionId,
          });

          if (stripeResponse.error) {
            alert(stripeResponse.error.message);
          }
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `error.message`.
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <CheckoutSectionWrap>
      <Shipping shipping={shipping} setShipping={setShipping} />
      <BasketTotal total={`${twoDecimalPlaces(+total + shipping.price)}`} />
      <CTAButton onClick={onCheckoutClicked} disabled={!hasItems}>
        Checkout
      </CTAButton>
    </CheckoutSectionWrap>
  );
};
