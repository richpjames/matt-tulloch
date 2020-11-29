import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const BigLogo = () => {
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
    <Image
      style={{ width: "min(55vw, 550px)" }}
      fluid={image.sharp.fluid}
      fadeIn={false}
      alt="company logo"
    />
  );
};

export default BigLogo;
