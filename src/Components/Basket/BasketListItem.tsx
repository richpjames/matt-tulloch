import React from "react";
import styled from "styled-components/macro";
// import { useStaticQuery, Link, graphql } from "gatsby";

import { QuantityPanel } from "./QuantityPanel";
import {
  BasketListItemContainer,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListItemPhotoWrap,
  ListItemPhoto,
} from "../Common";

const RemoveFromCartButton = styled.button`
  right: 0;
  top: 0;
  position: absolute;
  font-size: 0.75em;
  margin-top: -2rem;
  margin-right: -2rem;
`;

interface Props {
  addToBasket: (id: string) => void;
  decrementInCart: (id: string) => void;
  removeFromBasket: (id: string) => void;
  id: string;
  image: any;
  index: number;
  price: number;
  quantity: number;
  stock: number;
  title: string;
  slug: string;
  dimensions: string;
}

export const BasketListItem: React.FC<Props> = ({
  index,
  title,
  image,
  id,
  price,
  addToBasket,
  removeFromBasket,
  decrementInCart,
  quantity,
  dimensions,
}) => {
  return (
    <BasketListItemContainer
      index={index}
      width="100%"
      horizontalmargin="5rem"
      className={title}
    >
      <ListItemPhotoWrap width="30%">
        <ListItemPhoto
          fluid={image.fluid}
          alt={`${title} print image`}
          style={{
            height: "auto",
            width: "100%",
          }}
        />
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="40%">
        <RemoveFromCartButton
          onClick={() => removeFromBasket(id)}
          name="Remove from basket"
          type="button"
        >
          X
        </RemoveFromCartButton>
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{dimensions}</ListItemSubtitle>
        <ListItemSubtitle>{`£${price}`}</ListItemSubtitle>
        <QuantityPanel
          addToCart={() => addToBasket(id)}
          decrementInCart={() => decrementInCart(id)}
          outOfStock={false}
          quantity={quantity}
        />
      </MetaInfoContainer>
    </BasketListItemContainer>
  );
};
