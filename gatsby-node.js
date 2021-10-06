const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            title
            images {
              src
              gatsbyImageData(layout: FULL_WIDTH)
              altText
            }
            id
            handle
            description
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const productTemplate = path.resolve(`./src/templates/productTemplate.js`);
  result.data.allShopifyProduct.edges.forEach((node) => {
    createPage({
      path: `/shop/${node.node.handle}`,
      component: productTemplate,
      context: {
        product: node,
      },
    });
  });
};
