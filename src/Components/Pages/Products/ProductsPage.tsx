import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl } from "../../../constants";
import {
  ListItemContainer,
  ListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  PageWrapper,
} from "../../Common";
import { PageTitle } from "../../Common/Titles";

interface Props extends RouteComponentProps {
  products: byId<Product>;
  productIds: visibileIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

const ProductsPage: FunctionComponent<Props> = ({ products, productIds }) => {
  const productDetails = productIds.map((productId) => products[productId]);

  return (
    <PageWrapper>
      <PageTitle>products</PageTitle>
      <ListWrap>
        {productDetails.map((product, index) => {
          const { slug, title, thumbnail } = product;
          return (
            <ListItemContainer
              index={index}
              height="50%"
              width="100%"
              horizontalMargin="0rem"
              topMargin="1rem"
              key={index}
              to={slug}
            >
              <ListItemPhotoWrap width="30%">
                <ListItemPhoto
                  src={`${mainImageUrl}${slug}/thumbnails/${thumbnail}`}
                />
              </ListItemPhotoWrap>
              <MetaInfoContainer index={index} width="40%">
                <ListItemTitle>{title}</ListItemTitle>
              </MetaInfoContainer>
            </ListItemContainer>
          );
        })}
      </ListWrap>
    </PageWrapper>
  );
};
const mapStateToProps = (state: State) => {
  const { products } = state;
  return {
    productIds: products.visibleIds,
    products: products.byId,
  };
};
export default connect(mapStateToProps)(ProductsPage);
