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

  // has to be initialised with a value for typescript reasons
  let containerHeight = "0rem";
  let photoWrapWidth = "15rem";
  if (image.fluid.aspectRatio < 1) {
    //portrait
    containerHeight = "25rem";
  } else if (image.fluid.aspectRatio > 1) {
    //landscape
    containerHeight = "15rem";
    photoWrapWidth = "18rem";
  } else if (image.fluid.aspectRatio === 1) {
    //square
    containerHeight = "20rem";
    width = "15rem";
  }
  return (
    <ListItemContainer
      index={index}
      height={containerHeight}
      width="100%"
      horizontalMargin="0"
      className={title}
    >
      <ListItemPhotoWrap width={photoWrapWidth} height={"17rem"}>
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
