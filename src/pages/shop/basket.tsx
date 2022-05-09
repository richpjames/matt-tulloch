import React from "react";
import styled from "styled-components/macro";

import { SmallLogo } from "../../Components/Common";
import { Layout } from "../../Components/layout";
import Basket from "../../Components/Basket/Basket";

const PageTitle = styled.h2`
  padding-top: 1rem;
`;

const BasketContainer = () => {
  return (
    <Layout>
      <SmallLogo />
      <PageTitle>Basket</PageTitle>
      <Basket />
    </Layout>
  );
};
export default BasketContainer;
