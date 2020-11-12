import React from "react";
import styled from "styled-components/macro";
import { useStaticQuery, graphql, Link } from "gatsby";
import { text } from "../../../constants";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 2rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  height: 15rem;
  width: 15rem;
  border: 5px solid ${text};
`;

export const ProductGrid = () => {
  const { allProductsJson } = useStaticQuery(graphql`
    query {
      allProductsJson {
        nodes {
          slug
        }
      }
    }
  `);
  return (
    <GridWrapper>
      {allProductsJson.nodes.map((product: { slug: string }) => (
        <Link to={`prints/${product.slug}`}>
          <GridItem>{product.slug}</GridItem>
        </Link>
      ))}
    </GridWrapper>
  );
};
