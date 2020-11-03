import React from "react";
import styled from "styled-components/macro";

const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

const GridItem = styled.div`
  height: 10rem;
`;

export const ProductGrid = () => {
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <GridWrapper>
      {products.map((product) => (
        <GridItem>{product}</GridItem>
      ))}
    </GridWrapper>
  );
};
