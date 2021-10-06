import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  return (
    <Layout>
      <Wrapper>{product.node.title}</Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section``;

export default ProductTemplate;
