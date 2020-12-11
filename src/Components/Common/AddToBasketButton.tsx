import React, { useContext } from "react";
import styled from "styled-components/macro";
import { background, text } from "../../constants";
import { CartContext } from "../Basket/CartProvider";

const Button = styled.button<{
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
  const backgroundColour = `${text}`;
  const textColour = `${background}`;

  let buttonMessage = "add to basket";

  const inStock = inventory < 1;

  if (inCart) {
    buttonMessage = "in basket";
  } else if (!inStock) {
    buttonMessage = "pre-order";
  }

  return (
    <ButtonWrapper>
      <Button
        onClick={() => add(id)}
        className="add-to-basket"
        backgroundColour={backgroundColour}
        textColour={textColour}
        disabled={inStock}
      >
        {buttonMessage}
      </Button>
    </ButtonWrapper>
  );
};
export default AddToBasketButton;
