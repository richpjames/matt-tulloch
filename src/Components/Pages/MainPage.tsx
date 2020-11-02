import React from "react";
import styled from "styled-components/macro";

import Logo from "../Global/Logo";

const LogoWrap = styled.section`
  align-self: center;
`;

interface Props {
  products?: byId<Product>;
  productIds?: visibileIds;
}

export const MainPage = ({ products = {}, productIds = [] }: Props) => {
  return (
    <>
      <LogoWrap>
        <Logo />
      </LogoWrap>
    </>
  );
};
