import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";

import { useSiteMetadata } from "../hooks/use-sitemetadata";

import { GlobalStyle } from "../styles";
import { Footer } from "./Global/Footer";
import { Header } from "./Global/Header";

const PageWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 400px) {
    width: 80%;
  }
`;

export const Layout: React.FC = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>
        <PageWrap>{children}</PageWrap>
      </main>
      <Footer />
    </>
  );
};
