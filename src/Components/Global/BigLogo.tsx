import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const BigLogo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "tullochlogo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Image
      style={{ height: "100%", width: "100%" }}
      fluid={image.sharp.fluid}
      alt="company logo"
    />
  );
};

export default BigLogo;
