import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';
import { graphql } from 'gatsby';
import Category from '../components/shop/category';
import greenTeaImg from '../images/greenTea.jpg';
import blackTeaImg from '../images/blackTea.jpg';

const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges;
  const greenTea = 'Green Tea';
  const blackTea = 'Black Tea';

  const greenTeaProducts = products.filter((item) => item.node.tags.includes(greenTea));
  const blackTeaProducts = products.filter((item) => item.node.tags.includes(blackTea));

  return (
    <Layout>
      <Wrapper>
        <Category label={'Green Tea'} products={greenTeaProducts} image={greenTeaImg} />
        <Category label={'Black Tea'} products={blackTeaProducts} image={blackTeaImg} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          handle
          id
          title
          tags
          description
          images {
            src
            gatsbyImageData(layout: FULL_WIDTH)
            altText
          }
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Shop;
