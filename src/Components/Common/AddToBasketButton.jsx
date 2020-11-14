import React, { useContext } from "react";
import styled from "styled-components/macro";
import { navigate } from "@reach/router";

import { background, text } from "../../constants";
import { CartContext } from "../Basket/CartProvider";

const ButtonStyles = styled.button`
  width: 150px;
  height: 40px;
  background: ${background};
  color: ${text};
  border: ${({ borderColour }) =>
    `1px solid ${borderColour ? borderColour : text}`};
`;

const ButtonWrapper = styled.div`
  padding-top: 1rem;
`;

const AddToBasketButton = ({ id }) => {
  const { add } = useContext(CartContext);
  // const inCart = cartQuantity > 0;

  // let buttonMessage = "Add to basket";

  // if (new Date(publishDate).getTime() > new Date().getTime()) {
  //   buttonMessage = "Pre-order";
  // }

  // let onClick = () => addToBasket(id);

  // if (inCart) {
  //   buttonMessage = "In basket";
  //   onClick = () => navigate(linkTo);
  // } else if (inventoryQuantity < 1) {
  //   buttonMessage = "Out of stock";
  // }

  return (
    <ButtonWrapper>
      <ButtonStyles
        onClick={() => add(id)}
        disabled={false}
        className="add-to-basket"
        // borderColour={borderColour}
      >
        {"button"}
      </ButtonStyles>
    </ButtonWrapper>
  );
};
export default AddToBasketButton;
