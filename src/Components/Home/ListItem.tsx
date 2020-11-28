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
  let width = "100%";
  if (image.fluid.aspectRatio > 1) {
    //landscape
    width = "100%";
  } else if (image.fluid.aspectRatio === 1) {
    width = "15rem";
  }
  return (
    <ListItemContainer
      index={index}
      height="20rem"
      width="100%"
      horizontalMargin="0"
      className={title}
    >
      <ListItemPhotoWrap width={"15rem"} height={"17rem"}>
        <ListItemPhoto
          fluid={image.fluid}
          style={{
            height: "auto",
            width: width,
          }}
          alt={`${title} print image`}
        />
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="40%">
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{dimensions}</ListItemSubtitle>
        <ListItemSubtitle>{`£${price}`}</ListItemSubtitle>
      </MetaInfoContainer>
    </ListItemContainer>
  );
};
