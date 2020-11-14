import React from "react";

import { SmallLogo } from "../Components/Common/";
import { Layout } from "../Components/layout";
import CartProvider from "../Components/Basket/CartProvider";
import Basket from "../Components/Basket/Basket";

const BasketContainer = () => {
  return (
    <CartProvider>
      <Layout>
        <SmallLogo />
        <Basket />
      </Layout>
    </CartProvider>
  );
};
export default BasketContainer;
