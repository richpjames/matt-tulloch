import React from "react";
import styled from "styled-components/macro";

import BigLogo from "../Components/Global/BigLogo";
import { Layout } from "../Components/layout";
import { ProductGrid } from "../Components/Pages/Products/ProductGrid";

const LogoWrap = styled.section`
  align-self: center;
  width: 75%;
`;

const MainPage = () => {
  return (
    <Layout>
      <LogoWrap>
        <BigLogo />
      </LogoWrap>
      <ProductGrid />
    </Layout>
  );
};
export default MainPage;
