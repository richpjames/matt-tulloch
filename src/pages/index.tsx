import React from "react";

import BigLogo from "../Components/Global/BigLogo";
import { Layout } from "../Components/layout";
import { ProductGrid } from "../Components/ProductGrid";

const MainPage = () => {
  return (
    <Layout>
      <BigLogo />
      <ProductGrid />
    </Layout>
  );
};
export default MainPage;
