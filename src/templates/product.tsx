import React, { useContext } from "react";
import { graphql, PageProps } from "gatsby";

import { Layout } from "../Components/layout";
import {
  AddToBasketButton,
  Text,
  PageWrapper,
  InfoSection,
  SmallLogo,
} from "../Components/Common";

import CartProvider from "../Components/Basket/CartProvider";

interface Props extends PageProps {
  photos: number[];
  title: string;
  author: string;
  leftDescription: string;
  rightDescription: string;
  id: string;
  imagePath: string;
  data: { productsJson: any };
}

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      id
      blurb
      devPriceId
      prodPriceId
      price
      dimensions
      title
    }
  }
`;

const ProductPageTemplate = ({ data, pageContext }: Props) => {
  const { dimensions, title, price, blurb, id, imagePath } = data.productsJson;

  return (
    <CartProvider>
      <Layout>
        <SmallLogo />
        <h2>{title}</h2>
        <InfoSection>
          <Text text={blurb} />
          <AddToBasketButton id={id} />
          <p>{dimensions}</p>
          <p>£{price}</p>
        </InfoSection>
      </Layout>{" "}
    </CartProvider>
  );
};
export default ProductPageTemplate;
