import React from "react";
import { SmallLogo } from "../Components/Common";

import { Layout } from "../Components/layout";
import { ProductGrid } from "../Components/Home/ProductGrid";

const MainPage = () => {
  return (
    <Layout>
      <SmallLogo />
      <ProductGrid />
    </Layout>
  );
};
export default MainPage;
