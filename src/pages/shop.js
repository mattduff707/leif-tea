import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';

const Shop = () => {
  return (
    <Layout>
      <Wrapper></Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Shop;
