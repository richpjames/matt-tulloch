import React from "react";
import styled from "styled-components/macro";
import { QuantityPanel } from "../Basket/QuantityPanel";

import {
  ListItemContainer,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListItemPhotoWrap,
  ListItemPhoto,
  AddToBasketButton,
} from "../Common";

const ButtonContainer = styled.div`
  padding: 0.5rem;
`;

interface ListItemProps {
  addToBasket: (id: string) => void;
  id: string;
  image: any;
  index: number;
  price: number;
  title: string;
  slug: string;
  dimensions: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  index,
  title,
  image,
  id,
  price,
  slug,
  dimensions,
}) => {
  return (
    <ListItemContainer
      index={index}
      width="100%"
      horizontalmargin="0"
      className={title}
      to={`prints/${slug}`}
    >
      <ListItemPhotoWrap width={"30%"}>
        <ListItemPhoto
          fluid={image.fluid}
          style={{
            height: "auto",
            width: "100%",
          }}
          alt={`${title} print image`}
        />
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="30%">
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{dimensions}</ListItemSubtitle>
        <ListItemSubtitle>{`£${price}`}</ListItemSubtitle>
      </MetaInfoContainer>
      <ButtonContainer onClick={(e) => e.stopPropagation()}>
        <AddToBasketButton id={id} inventory={5}></AddToBasketButton>
      </ButtonContainer>
    </ListItemContainer>
  );
};
