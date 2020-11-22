exports.createPages = async ({ actions, graphql, reporter }) => {
  const productsQuery = await graphql(`
    query MyQuery {
      allProductsJson {
        nodes {
          slug
          images
        }
      }
    }
  `);
  if (productsQuery.errors) {
    reporter.panic("failed to create books slug", productsQuery.errors);
  }
  const products = productsQuery.data.allProductsJson.nodes;
  products.forEach((product) => {
    actions.createPage({
      path: `/prints/${product.slug}`,
      component: require.resolve("./src/templates/product.tsx"),
      context: {
        slug: `${product.slug}`,
        slugRegex: `/${product.slug}/`,
      },
    });
  });
};
