import * as React from "react";
import GatsbyImage from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components/macro";
import { Layout } from "../Components/layout";

const Image = styled(GatsbyImage)`
  @media only screen and (max-width: 600px) {
    margin-top: 2rem;
  }
`;

const HeroImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
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
      style={{ width: "min(85vw, 850px)" }}
      fluid={image.sharp.fluid}
      fadeIn={false}
      alt="company logo"
    />
  );
};

const Index = () => {
  return (
    <Layout>
      <HeroImage />
    </Layout>
  );
};

export default Index;
