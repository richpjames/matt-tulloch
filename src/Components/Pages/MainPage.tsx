import { RouteComponentProps } from "@reach/router";
import React from "react";
import styled from "styled-components/macro";

import { PageWrapper } from "../Common";
import BigLogo from "../Global/BigLogo";
import { ProductGrid } from "./Products/ProductGrid";

const LogoWrap = styled.section`
  align-self: center;
`;

interface Props extends RouteComponentProps {
  products?: byId<Product>;
  productIds?: visibileIds;
}

export const MainPage = ({ products = {}, productIds = [] }: Props) => {
  return (
    <PageWrapper>
      <LogoWrap>
        <BigLogo />
      </LogoWrap>
      <ProductGrid />
    </PageWrapper>
  );
};
