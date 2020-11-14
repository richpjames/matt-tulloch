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

// interface Props {
//   addToBasket?: (id: string) => void;
//   decrementInCart?: (id: string) => void;
//   id: string;
//   imageSrc: string;
//   index: number;
//   price: string;
//   quantity: number;
//   removeFromBasket?: (id: string, quantityToReplace: number) => void;
//   stock: number;
//   title: string;
//   slug: string;
// }

export const BasketListItem = ({ id }: { id: string }) => {
  return <></>;
  // <ListItemContainer
  //   index={index}
  //   height="20%"
  //   width="100%"
  //   horizontalMargin="5rem"
  //   topMargin="2rem"
  //   className={title}
  // >
  //   <ListItemPhotoWrap width="40%" onClick={() => navigate(slug)}>
  //     <ListItemPhoto src={imageSrc} />
  //   </ListItemPhotoWrap>
  //   <MetaInfoContainer index={index} width="40%">
  //     <ListItemTitle>{title}</ListItemTitle>
  //     <ListItemSubtitle>""</ListItemSubtitle>
  //     <QuantityPanel
  //       addToCart={() => console.log(id)}
  //       decrementInCart={() => console.log(id)}
  //       outOfStock={stock < 0}
  //       quantity={quantity}
  //     />
  //     <RemoveFromCartButton
  //       onClick={() => console.log(id, quantity)}
  //       name="Remove from basket"
  //       type="button"
  //     >
  //       X
  //     </RemoveFromCartButton>
  //   </MetaInfoContainer>
  // </ListItemContainer>
};
