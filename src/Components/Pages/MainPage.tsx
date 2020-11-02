import React from "react";
import styled from "styled-components/macro";

import { connect } from "react-redux";

import Footer from "../Global/Footer";

interface Props {
  products?: byId<Product>;
  productIds?: visibileIds;
}

export const MainPage = ({ products = {}, productIds = [] }: Props) => {
  return (
    <>
      <Footer />
    </>
  );
};
