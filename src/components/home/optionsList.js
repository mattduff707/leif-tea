import React from 'react';
import styled from 'styled-components';

const OptionsList = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1600px;
  /* border: 2px solid red; */
  padding: 30px 0px;
`;
export default OptionsList;
