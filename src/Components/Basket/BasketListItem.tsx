import React from "react";
import styled from "styled-components/macro";
// import { useStaticQuery, Link, graphql } from "gatsby";

import { QuantityPanel } from "./QuantityPanel";
import {
  ListItemContainer,
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
`;

interface Props {
  addToBasket: (id: string) => void;
  decrementInCart: (id: string) => void;
  removeFromBasket: (id: string) => void;
  id: string;
  // imageSrc: string;
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
  slug,
  id,
  addToBasket,
  removeFromBasket,
  decrementInCart,
  quantity,
  stock,
  dimensions,
}) => {
  return (
    <ListItemContainer
      index={index}
      height="20%"
      width="100%"
      horizontalMargin="5rem"
      topMargin="2rem"
      className={title}
    >
      <ListItemPhotoWrap width="40%" onClick={() => {}}>
        {/* <ListItemPhoto src={imageSrc} /> */}
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="40%">
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{dimensions}</ListItemSubtitle>
        <QuantityPanel
          addToCart={() => addToBasket(id)}
          decrementInCart={() => decrementInCart(id)}
          outOfStock={false}
          quantity={quantity}
        />
        <RemoveFromCartButton
          onClick={() => removeFromBasket(id)}
          name="Remove from basket"
          type="button"
        >
          X
        </RemoveFromCartButton>
      </MetaInfoContainer>
    </ListItemContainer>
  );
};
