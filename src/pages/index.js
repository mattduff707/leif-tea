import * as React from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';
import cartContext from '../providers/cartProvider';

const IndexPage = () => {
  return (
    <Layout>
      <cartContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <>
              <h1>{context.name}</h1>
            </>
          );
        }}
      </cartContext.Consumer>
    </Layout>
  );
};

const Wrapper = styled.section``;

export default IndexPage;
