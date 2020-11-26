import React from "react";
import styled from "styled-components/macro";

import {
  ListItemContainer,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListItemPhotoWrap,
  ListItemPhoto,
} from "../Common";

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
  addToBasket,
  dimensions,
}) => {
  return (
    <ListItemContainer
      index={index}
      height="20%"
      width="100%"
      horizontalMargin="0"
      topMargin="2rem"
      className={title}
    >
      <ListItemPhotoWrap width="30%">
        <ListItemPhoto fixed={image.fixed} alt={`${title} print image`} />
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="40%">
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{dimensions}</ListItemSubtitle>
        <ListItemSubtitle>{`£${price}`}</ListItemSubtitle>
      </MetaInfoContainer>
    </ListItemContainer>
  );
};
