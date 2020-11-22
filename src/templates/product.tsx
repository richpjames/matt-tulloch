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

const Seperator = styled.div`
  height: 3rem;
`;
const ImageWrapper = styled.div<{ width: string }>`
  height: auto;
  width: ${({ width }) => width};
`;
const ImageSelector = styled.div`
  height: 5rem;
  width: 7.55rem;
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const LeftIcon = styled.span`
  margin-left: auto;
`;
const RightIcon = styled.span``;

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
    <Layout>
      <SmallLogo />
      <ImageWrap>
        {images.nodes.map((image: any, index: number) => {
          const { childImageSharp } = image;
          let imageWidth = "500px";
          if (
            childImageSharp.fluid.presentationWidth >
            childImageSharp.fluid.presentationHeight
          ) {
            imageWidth = "800px";
          }
          return (
            <>
              {index > 0 ? <Seperator key={index} /> : null}
              <ImageWrapper width={imageWidth} key={index}>
                <GatsbyImage
                  key={index}
                  fluid={childImageSharp.fluid}
                  alt={`a photo of ${title} print`}
                  style={{ width: imageWidth }}
                />
              </ImageWrapper>
            </>
          );
        })}
      </ImageWrap>
      {/* <ImageSelector>
        <RightIcon>&#x02991;</RightIcon> <LeftIcon>&#x02992;</LeftIcon>
      </ImageSelector> */}
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
