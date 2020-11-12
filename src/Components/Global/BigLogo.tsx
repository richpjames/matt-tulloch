import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const BigLogo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "tullochlogo.png" }) {
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
      style={{ height: "75%", width: "75%" }}
      fluid={image.sharp.fluid}
      fadeIn={false}
      alt="company logo"
    />
  );
};

export default BigLogo;
