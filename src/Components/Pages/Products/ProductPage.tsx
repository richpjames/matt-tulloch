import React from "react";
import { connect } from "react-redux";

import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import {
  // AddToBasketButton,
  Photos,
  ProductTitle,
  // SplitText,
  PageWrapper,
  InfoSection,
} from "../../Common";
import {
  // text,
  productPageImageHeight,
  productPageImageWidth,
} from "../../../constants";

const ProductPageWrapper = styled(PageWrapper)`
  padding-top: 2rem;
  display: grid;
`;

interface Props extends RouteComponentProps {
  title: string;
  description: string;
  id: string;
  imagePath: string;
}

const ProductPage = ({ title, description, id, imagePath, path }: Props) => {
  return (
    <ProductPageWrapper>
      <Photos
        photos={[1, 2]}
        url={imagePath}
        imageThumbnailHeight={productPageImageHeight}
        imageThumbnailWidth={productPageImageWidth}
      />
      <InfoSection>
        <ProductTitle title={title} />
      </InfoSection>
    </ProductPageWrapper>
  );
};

const mapStateToProps = (state: State, ownProps: { id: string }) => {
  const { id } = ownProps;
  const product = state.products.byId[id];
  const { title } = product;
  return {
    title: title,
    id: id,
  };
};

export default connect(mapStateToProps)(ProductPage);
