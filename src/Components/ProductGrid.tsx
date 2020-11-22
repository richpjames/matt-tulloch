import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { ProductsContext } from "./ProductsProvider";

import Image from "gatsby-image";
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 5rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled(Image)<{ fluid: any }>`
  height: 15rem;
  width: 15rem;
`;

export const ProductGrid = () => {
  const { products } = useContext(ProductsContext);
  return (
    <GridWrapper>
      {products.map(
        (
          product: { image: any; slug: string; title: string },
          index: number
        ) => (
          <Link to={`prints/${product.slug}`} key={index}>
            <GridItem
              fluid={product.image.fluid}
              alt={`${product.title} image`}
            />
          </Link>
        )
      )}
    </GridWrapper>
  );
};
