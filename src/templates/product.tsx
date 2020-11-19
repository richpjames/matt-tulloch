import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components/macro";

import { Layout } from "../Components/layout";
import {
  AddToBasketButton,
  Text,
  InfoSection,
  SmallLogo,
} from "../Components/Common";

import GatsbyImage from "gatsby-image";

const ProductPageTitle = styled.h2`
  align-self: flex-start;
`;

const ImageWrap = styled.div`
  padding: 3rem;
`;
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
      inventory
    }
    image: file(name: { in: [$slug] }) {
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
    prodPriceId,
    devPriceId,
    blurb,
    inventory,
  } = data.productsJson;
  const id = process.env.GATSBY_ENV === "production" ? prodPriceId : devPriceId;
  const { image } = data;

  return (
    <Layout>
      <SmallLogo />
      <ImageWrap>
        <GatsbyImage
          fluid={image.sharp.fluid}
          alt={`a photo of ${title} print`}
          style={{ width: "60rem", height: "auto" }}
        />
      </ImageWrap>
      <ProductPageTitle>{title}</ProductPageTitle>
      <InfoSection>
        <p>{blurb}</p>
        <p>{dimensions}</p>
        <p>£{price}</p>
        <AddToBasketButton id={id} inventory={inventory} />
      </InfoSection>
    </Layout>
  );
};
export default ProductPageTemplate;
