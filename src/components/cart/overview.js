import React from 'react';
import styled from 'styled-components';
import Btn from '../btn';

const Overview = ({ getTotal }) => {
  return (
    <Wrapper>
      <FlexItem>
        <Text>
          <Highlight>Total:</Highlight> ${getTotal()}
        </Text>
      </FlexItem>
      <FlexItem>
        <Text>
          <Highlight>Shipping:</Highlight> Free
        </Text>
      </FlexItem>
      <FlexItem>
        <Text>
          <Highlight>Grand Total:</Highlight> ${getTotal()}
        </Text>
      </FlexItem>
      <FlexItem>
        <StyledBtn>Checkout</StyledBtn>
      </FlexItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-width: 900px;
  padding: 20px 0px;
  border: 6px solid var(--color-main);
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  @media (max-width: 1000px) {
    min-width: initial;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const FlexItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const Text = styled.p`
  padding: 10px 0px;
`;
const Highlight = styled.span`
  font-weight: 600;
`;
const StyledBtn = styled(Btn)`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Overview;
