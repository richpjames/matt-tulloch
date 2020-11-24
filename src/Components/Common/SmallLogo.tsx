import React from "react";
import styled from "styled-components/macro";
import Image from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const ImageWrapper = styled(Link)`
  height: auto;
  width: 20rem;
`;

const SmallLogo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "tullltulloch-gold-logo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <ImageWrapper to="/">
      <Image fluid={image.sharp.fluid} fadeIn={false} alt="company logo" />
    </ImageWrapper>
  );
};

export default SmallLogo;
