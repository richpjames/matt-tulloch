import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const SmallLogo = () => {
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
    <Link to="/">
      <Image
        style={{ height: "100%", width: "20rem" }}
        fluid={image.sharp.fluid}
        fadeIn={false}
        alt="company logo"
      />
    </Link>
  );
};

export default SmallLogo;
