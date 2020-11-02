import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { MainPage } from "./Components/Pages/MainPage";
import { Header } from "./Components/Global/Header";
import BasketContainer from "./Components/Pages/Basket/BasketContainer";
import { ProductsContainer } from "./Components/Pages/Products/ProductsContainer";
import ProductPage from "./Components/Pages/Products/ProductPage";
import { Success } from "./Components/Pages/Success";
import { OnRouteChange } from "./Components/Global/ScrollToTop";

import { fetchProducts } from "./actions/index";
import "./App.css";

const PageWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 400px) {
    width: 100%;
  }
`;

interface Props {
  fetchProducts: () => void;
  products?: byId<Product>;
  productIds?: visibileIds;
}

const App = ({ fetchProducts, products = {}, productIds = [] }: Props) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <PageWrap>
      <Header />
      <Router>
        <ProductsContainer path="/" default>
          {productIds.map((productId) => {
            const { slug } = products[productId];
            return (
              <ProductPage
                description=""
                imagePath=""
                id={productId}
                path={slug}
                key={productId}
              />
            );
          })}
        </ProductsContainer>
        <BasketContainer path="/basket" />
        <Success path="/success" />
      </Router>
      {/* this prevents the page from opening at the centre */}
      <OnRouteChange action={() => window.scrollTo(0, 0)} />
      <MainPage />
    </PageWrap>
  );
};

const mapStateToProps = (state: State) => {
  const { products } = state;
  return {
    productIds: products.visibleIds,
    products: products.byId,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
})(App);
