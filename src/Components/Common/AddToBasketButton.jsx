import React from "react";
import styled from "styled-components/macro";
import { navigate } from "@reach/router";

import { background, text } from "../../constants";

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

const AddToBasketButton = ({
  cartQuantity,
  inventoryQuantity,
  addToBasket,
  id,
  borderColour,
  linkTo,
  publishDate,
}) => {
  const inCart = cartQuantity > 0;

  let buttonMessage = "Add to basket";

  if (new Date(publishDate).getTime() > new Date().getTime()) {
    buttonMessage = "Pre-order";
  }

  let onClick = () => addToBasket(id);

  if (inCart) {
    buttonMessage = "In basket";
    onClick = () => navigate(linkTo);
  } else if (inventoryQuantity < 1) {
    buttonMessage = "Out of stock";
  }

  return (
    <ButtonWrapper>
      <ButtonStyles
        onClick={onClick}
        disabled={false}
        className="add-to-basket"
        borderColour={borderColour}
      >
        {buttonMessage}
      </ButtonStyles>
    </ButtonWrapper>
  );
};
export default AddToBasketButton;
