import * as React from 'react';
import styled from 'styled-components';
import Guide from '../components/home/guide';
import HomeIcon from '../components/home/homeIcon';
import Layout from '../layout/layout';

// import cartContext from '../providers/cartProvider';

const IndexPage = () => {
  return (
    <Layout>
      {/* <cartContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <>
              <h1>{context.name}</h1>
            </>
          );
        }}
      </cartContext.Consumer> */}
      <Wrapper>
        <HomeIcon />
        <Guide />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
  /* border: 2px solid red; */
`;

export default IndexPage;
