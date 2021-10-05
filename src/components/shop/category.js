import React from 'react';
import styled from 'styled-components';
import Heading from '../heading';
import Product from './product';

const Category = ({ products, label, image }) => {
  return (
    <Wrapper>
      <Title tag="h2">{label}</Title>
      <ProductList>
        {products.map((item) => {
          const node = item.node;
          return (
            <Product
              title={node.title}
              handle={node.handle}
              price={node.priceRangeV2.maxVariantPrice.amount}
              description={node.description}
              image={image}
            />
          );
        })}
      </ProductList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  padding-bottom: 20px;
`;
const Title = styled(Heading)`
  border-bottom: 6px solid var(--color-highlight);
  font-size: 2rem;
`;
const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-top: 20px;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export default Category;
