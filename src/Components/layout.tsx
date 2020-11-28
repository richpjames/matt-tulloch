import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import { useStaticQuery, graphql } from "gatsby";

import { useSiteMetadata } from "../hooks/use-sitemetadata";

import { GlobalStyle } from "../styles";
import CartProvider from "./Basket/CartProvider";
import { Footer } from "./Global/Footer";
import { Header } from "./Global/Header";
import ProductsProvider from "./ProductsProvider";
import BackgroundImage from "gatsby-background-image";

const PageWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 400px) {
    width: 90%;
  }
`;

export const Layout: React.FC = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "background.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <GlobalStyle />
          <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          <main>
            <Header />
            <BackgroundImage
              fluid={image.sharp.fluid}
              Tag="section"
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                zIndex: -1,
              }}
            />
            <PageWrap>{children}</PageWrap>
          </main>
          <Footer />
        </CartProvider>
      </ProductsProvider>
    </>
  );
};
