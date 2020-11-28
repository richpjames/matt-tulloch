import React from "react";
import styled from "styled-components/macro";

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

const ButtonCaption = styled(ListItemSubtitle)`
  padding: 0.5rem;
  text-align: center;
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
  addToBasket,
  dimensions,
}) => {
  let width = "100%";

  // has to be initialised with a value for typescript reasons
  // let photoWrapWidth = "";
  // if (image.fluid.aspectRatio < 1) {
  //   photoWrapWidth = "15rem";
  //   //portrait
  // } else if (image.fluid.aspectRatio > 1) {
  //   //landscape
  //   photoWrapWidth = "18rem";
  // } else if (image.fluid.aspectRatio === 1) {
  //   //square
  //   width = "15rem";
  // }
  return (
    <ListItemContainer
      index={index}
      width="100%"
      horizontalMargin="0"
      className={title}
      to={`prints/${slug}`}
    >
      <ListItemPhotoWrap width={"30%"} height={"17rem"}>
        <ListItemPhoto
          fluid={image.fluid}
          style={{
            height: "auto",
            width: width,
          }}
          alt={`${title} print image`}
        />
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="30%">
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{dimensions}</ListItemSubtitle>
        <ListItemSubtitle>{`£${price}`}</ListItemSubtitle>
      </MetaInfoContainer>
      <ButtonContainer>
        <AddToBasketButton id={id} inventory={5}></AddToBasketButton>
        <ButtonCaption>QUANTITY + 1</ButtonCaption>
      </ButtonContainer>
    </ListItemContainer>
  );
};
