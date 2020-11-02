import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import About from "./About";
import BasketContainer from "./Basket/BasketContainer";
import ProductPage from "./Products/ProductPage";
import Footer from "../Global/Footer";
import { Header } from "../Global/Header";
import OnRouteChange from "../Global/ScrollToTop";
import { Success } from "./Success";
import { ProductsPage } from "./Products/ProductsPage";

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
  products?: byId<Product>;
  productIds?: visibileIds;
}

const MainPage = ({ products = {}, productIds = [] }: Props) => {
  return (
    <>
      <PageWrap>
        <Header />
        <Router>
          <ProductsPage path="/" default>
            {productIds.map((bookId) => {
              const { slug } = products[bookId];
              return <ProductPage id={bookId} path={slug} key={bookId} />;
            })}
          </ProductsPage>
          <BasketContainer path="/basket" />
          <About path="/about" />
          <Success path="/success" />
        </Router>
        {/* this prevents the page from opening at the centre */}
        <OnRouteChange action={() => window.scrollTo(0, 0)} />
        <Footer />
      </PageWrap>
    </>
  );
};

const mapStateToProps = (state: State) => {
  const { products } = state;
  return {
    productIds: products.visibleIds,
    products: products.byId,
  };
};

export default connect(mapStateToProps)(MainPage);
