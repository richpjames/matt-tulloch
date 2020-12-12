import React, { useContext } from "react";
import styled from "styled-components/macro";

import { ProductsContext } from "../ProductsProvider";
import { CartContext } from "../Basket/CartProvider";

import { ListItem } from "./ListItem";

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const ProductGrid = () => {
  const { listProducts } = useContext(ProductsContext);
  const { add } = useContext(CartContext);
  const products = listProducts();
  return (
    <GridWrapper>
      {products.map(
        (
          product: {
            image: any;
            slug: string;
            title: string;
            dimensions: string;
            price: number;
            id: string;
            status: stockStatus;
          },
          index: number
        ) => {
          const { slug, title, id, image, dimensions, price, status } = product;
          return (
            <ListItem
              key={slug}
              slug={slug}
              title={title}
              image={image}
              dimensions={dimensions}
              index={index}
              id={id}
              price={price}
              status={status}
              addToBasket={() => add(id)}
            />
          );
        }
      )}
    </GridWrapper>
  );
};
