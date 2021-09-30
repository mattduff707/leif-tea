import React, { useState } from 'react';
import styled from 'styled-components';
import Boxes from './boxes';
import Checkout from './checkout';
import Inactive from './inactive';
import Selection from './selection';
import Heading from '../heading';

const Guide = () => {
  const [guide, setGuide] = useState(false);
  const [guideCart, setGuideCart] = useState([]);

  const startGuide = () => {
    setGuide(true);
  };
  if (!guide) {
    return (
      <Wrapper>
        <Inactive startGuide={startGuide} />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Title tag="h1">Let's find you the perfect box</Title>
        <Boxes />
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid green; */
`;
const Title = styled(Heading)`
  font-size: 2rem;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 6px solid var(--color-highlight);
`;

export default Guide;
