import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import MainPage from "./Components/Pages/MainPage";
import { fetchProducts } from "./actions/index";

interface Props {
  fetchProducts: () => void;
}

const App = ({ fetchProducts }: Props) => {
  useEffect(() => {
    // fetchProducts();
  }, [fetchProducts]);

  return <MainPage />;
};

export default connect(null, {
  fetchProducts,
})(App);
