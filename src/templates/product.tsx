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

const ImagesWrap = styled.div`
  padding: 3rem;
  @media only screen and (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Seperator = styled.div`
  height: 3rem;
`;
const ImageWrapper = styled.div`
  height: auto;
  width: 55vw;
  @media only screen and (max-width: 800px) {
    width: 95vw;
  }
`;
interface Props extends PageProps {
  photos: number[];
  title: string;
  author: string;
  leftDescription: string;
  rightDescription: string;
  id: string;
  imagePath: string;
  data: { productsJson: any; images: { nodes: any } };
}

export const query = graphql`
  query($slug: String!, $slugRegex: String!) {
    productsJson(slug: { eq: $slug }) {
      blurb
      devPriceId
      prodPriceId
      price
      dimensions
      title
      inventory
    }
    images: allFile(filter: { relativePath: { regex: $slugRegex } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
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
  const { images } = data;

  return (
    <>
      <Layout>
        <SmallLogo />
        <ImagesWrap>
          {images.nodes.map((image: any, index: number) => {
            const { childImageSharp } = image;

            return (
              <React.Fragment key={index}>
                {index > 0 ? <Seperator /> : null}
                <ImageWrapper>
                  <GatsbyImage
                    fluid={childImageSharp.fluid}
                    alt={`a photo of ${title} print`}
                  />
                </ImageWrapper>
              </React.Fragment>
            );
          })}
        </ImagesWrap>

        <ProductPageTitle>{title}</ProductPageTitle>

        <InfoSection>
          <p>{blurb}</p>
          <p>{dimensions}</p>
          <p>£{price}</p>
          <AddToBasketButton id={id} inventory={inventory} />
        </InfoSection>
      </Layout>
    </>
  );
};
export default ProductPageTemplate;
