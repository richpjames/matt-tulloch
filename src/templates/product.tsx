import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components/macro";

import { Layout } from "../Components/layout";
import {
  AddToBasketButton,
  InfoSection,
  SmallLogo,
} from "../Components/Common";

import GatsbyImage from "gatsby-image";

const ProductPageTitle = styled.h2`
  align-self: flex-start;
`;

const ImagesWrap = styled.section`
  display: flex;
  padding-bottom: 3rem;
  padding-top: 3rem;
  @media only screen and (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const ImageWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  @media only screen and (max-width: 800px) {
    width: 95vw;
  }
`;
const PageWrap = styled.div`
  max-width: 800px;
`;
interface Props extends PageProps {
  photos: number[];
  title: string;
  author: string;
  leftDescription: string;
  rightDescription: string;
  id: string;
  imagePath: string;
  data: { itemsJson: any; images: { nodes: any } };
}

export const query = graphql`
  query($slug: String!, $slugRegex: String!) {
    itemsJson(slug: { eq: $slug }) {
      blurb
      devPriceId
      prodPriceId
      price
      dimensions
      title
      inventory
      status
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
const ProductPageTemplate = ({ data }: Props) => {
  const {
    dimensions,
    title,
    price,
    prodPriceId,
    devPriceId,
    blurb,
    inventory,
    status,
  } = data.itemsJson;
  const id = process.env.GATSBY_ENV === "production" ? prodPriceId : devPriceId;
  const { images } = data;
  const image = images.nodes[0].childImageSharp;
  let width = "55vw";
  if (image?.fluid.aspectRatio <= 1) {
    width = "30rem";
  }

  return (
    <>
      <Layout>
        <SmallLogo />
        <PageWrap>
          <ImagesWrap>
            <ImageWrapper width={width}>
              <GatsbyImage
                fluid={image?.fluid}
                alt={`a photo of ${title} print`}
              />
            </ImageWrapper>
          </ImagesWrap>

          <ProductPageTitle>{title}</ProductPageTitle>

          <InfoSection>
            <p dangerouslySetInnerHTML={{ __html: blurb }}></p>
            <p>{dimensions}</p>
            <p>£{price}</p>
            <AddToBasketButton id={id} inventory={inventory} status={status} />
          </InfoSection>
        </PageWrap>
      </Layout>
    </>
  );
};
export default ProductPageTemplate;
