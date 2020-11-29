import React, { useContext } from "react";
import styled from "styled-components/macro";

import { Basket } from "grommet-icons";
import { text, background } from "../../constants";
import { CartContext } from "../Basket/CartProvider";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
`;

const IconWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Number = styled.p`
  font-weight: 200;
  font-family: "GT America", sans-serif;
  width: 7.5px;
  height: 10.5px;
  line-height: 10px;
  background-color: ${background};
  color: ${text};
  font-size: 15px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  padding: 2px;
`;

const Icon = styled(Basket)`
  position: relative;
  z-index: 0;
`;

export const BasketIcon = () => {
  const { count } = useContext(CartContext);
  return (
    <Container>
      <IconWrapper>
        <Number className="header-basket-items">{count}</Number>
        <Icon color={text} />
      </IconWrapper>
    </Container>
  );
};
