import React, { useContext } from "react";
import styled from "styled-components/macro";
import { background, text } from "../../constants";
import { CartContext } from "../Basket/CartProvider";

const ButtonStyles = styled.button<{
  borderColour?: string;
  backgroundColour: string;
  textColour: string;
}>`
  width: 150px;
  height: 40px;
  background: ${({ backgroundColour }) => backgroundColour};
  color: ${({ textColour }) => textColour};
  font-weight: 200;
`;

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

interface AddToBasketButtonProps {
  id: string;
  inventory: number;
}

const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({
  id,
  inventory,
}) => {
  const { add, get } = useContext(CartContext);
  const cartQuantity = get(id);
  const inCart = cartQuantity > 0;
  let backgroundColour = `${text}`;
  let textColour = `${background}`;

  let buttonMessage = "add to basket";

  if (inCart) {
    buttonMessage = "in basket";
  } else if (inventory < 1) {
    buttonMessage = "pre-order";
  }

  return (
    <ButtonWrapper>
      <ButtonStyles
        onClick={() => add(id)}
        disabled={false}
        className="add-to-basket"
        backgroundColour={backgroundColour}
        textColour={textColour}
      >
        {buttonMessage}
      </ButtonStyles>
    </ButtonWrapper>
  );
};
export default AddToBasketButton;
