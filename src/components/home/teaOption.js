import React from 'react';
import Option from './option';
import greenTea from '../../images/greenTea.jpg';

import styled from 'styled-components';

const TeaOption = ({ isChecked, handleClick, box }) => {
  return (
    <Wrapper>
      <Option
        type="checkbox"
        label={box.title}
        value={box.id}
        name="products"
        img={greenTea}
        isChecked={isChecked}
        handleClick={handleClick}
      />
      <Description>
        <i>{box.description}</i>
      </Description>
      <Price>${parseInt(box.priceRangeV2.maxVariantPrice.amount)}</Price>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.p`
  padding-top: 10px;
  font-size: 1.1rem;
  max-width: 240px;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  padding-top: 10px;
`;

export default TeaOption;
