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
  status: stockStatus;
}

const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({
  id,
  inventory,
  status,
}) => {
  const { add, get } = useContext(CartContext);
  const cartQuantity = get(id);
  const backgroundColour = `${text}`;
  const textColour = `${background}`;
  const inCart = cartQuantity > 0;

  const assignStockStatus: (status: stockStatus) => buttonMessage = (
    status
  ) => {
    switch (status) {
      case "available":
        return "add to basket";
      case "dead":
        return "out of stock";
      case "preorder":
        return "pre-order";
      default:
        return "add to basket";
    }
  };

  const cartQuantityMessage: (stockStatus: buttonMessage) => buttonMessage = (
    stockStatus
  ) => {
    const availableToBuy = stockStatus === "add to basket" || "pre-order";
    if (availableToBuy && inCart) {
      return "in basket";
    } else return stockStatus;
  };

  const stockStatus = assignStockStatus(status);

  const buttonMessage = cartQuantityMessage(stockStatus);

  return (
    <ButtonWrapper>
      <Button
        onClick={() => add(id)}
        className="add-to-basket"
        backgroundColour={backgroundColour}
        textColour={textColour}
        disabled={status === "dead"}
      >
        {buttonMessage}
      </Button>
    </ButtonWrapper>
  );
};
export default AddToBasketButton;
