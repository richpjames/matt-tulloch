import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

export const ProductsContext = React.createContext();

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store.
 */
const ProductsProvider = ({ children }) => {
  const data = useStaticQuery(skusQuery);
  return <Provider data={data}>{children}</Provider>;
};

ProductsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

/**
 * Shares product & sku data through Context.
 * Products are first loaded from Gatsby's GraphQL store and then updated with
 * current information from Stripe.
 */
const Provider = ({ data, children }) => {
  // Load product data from Gatsby store
  const [initialProducts, productsById] = processGatsbyData(data);
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsById,
        listProducts: (sortFn) => {
          const fn = sortFn || ((a, b) => b.price - a.price);
          return Object.values(products).sort(fn);
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

Provider.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

/** Normalize structure of data sourced from Gatsby's GraphQL store */
const processGatsbyData = (data) => {
  const { allImageSharp, allProductsJson } = data;

  const products = [];
  const productsById = {};
  allProductsJson.nodes.forEach((productData) => {
    const {
      prodPriceId,
      devPriceId,
      price,
      title,
      inventory,
      dimensions,
      slug,
    } = productData;
    const id =
      process.env.GATSBY_ENV === "production" ? prodPriceId : devPriceId;
    const imageQuery = new RegExp(String.raw`${slug}`);
    const image = allImageSharp.nodes.find((image) =>
      imageQuery.test(image.fluid.src)
    );
    const product = {
      price: +price,
      title,
      inventory,
      dimensions,
      slug,
      image,
      id,
    };

    products.push(product);
    productsById[id] = product;
  });
  return [products, productsById];
};

const skusQuery = graphql`
  {
    allProductsJson {
      nodes {
        price
        title
        prodPriceId
        devPriceId
        inventory
        slug
        dimensions
      }
    }
    allImageSharp {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default ProductsProvider;
