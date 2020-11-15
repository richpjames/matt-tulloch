import React from "react";

import { SmallLogo } from "../Components/Common/";
import { Layout } from "../Components/layout";
import Basket from "../Components/Basket/Basket";

const BasketContainer = () => {
  return (
    <Layout>
      <SmallLogo />
      <Basket />
    </Layout>
  );
};
export default BasketContainer;
