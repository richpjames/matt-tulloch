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
import GatsbyImage from "gatsby-image";

interface Props extends PageProps {
  photos: number[];
  title: string;
  author: string;
  leftDescription: string;
  rightDescription: string;
  id: string;
  imagePath: string;
  data: { productsJson: any; image: any };
}

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      blurb
      devPriceId
      prodPriceId
      price
      dimensions
      title
    }
    image: file(relativePath: { ne: $slug }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const ProductPageTemplate = ({ data, pageContext }: Props) => {
  const {
    dimensions,
    title,
    price,
    blurb,
    prodPriceId,
    devPriceId,
  } = data.productsJson;
  const { image } = data;
  const id = process.env.NODE_ENV === "production" ? prodPriceId : devPriceId;
  return (
    <CartProvider>
      <Layout>
        <SmallLogo />
        <h2>{title}</h2>
        <GatsbyImage
          fluid={image.sharp.fluid}
          alt="image"
          style={{ height: " 200px", width: "200px" }}
        />
        <InfoSection>
          <Text text={blurb} />
          <AddToBasketButton id={id} />
          <p>{dimensions}</p>
          <p>£{price}</p>
        </InfoSection>
      </Layout>
    </CartProvider>
  );
};
export default ProductPageTemplate;
