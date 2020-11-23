import React from "react";

import styled from "styled-components/macro";
import { SmallLogo } from "../Components/Common";

import { Layout } from "../Components/layout";
import { ProductGrid } from "../Components/ProductGrid";

const ContentWrapper = styled.div`
  padding: 3rem;
  text-align: center;
`;

const MainPage = () => {
  return (
    <Layout>
      <SmallLogo />
      <ContentWrapper>
        <h1>404</h1>
        <p>
          The page you are looking for could not be found.
          <br />
          <a href="/">Please click here</a>
        </p>
      </ContentWrapper>
      <ProductGrid />
    </Layout>
  );
};
export default MainPage;
