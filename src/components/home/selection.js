import React from 'react';
import TeaOption from './teaOption';
import OptionsList from './optionsList';
import styled from 'styled-components';
import Btn from '../btn';
import Heading from '../heading';

const Selection = ({ boxes, selection, makeSelection, isIncluded, startCheckout }) => {
  return (
    <Wrapper>
      <Title tag="h2">Select your box</Title>
      <OptionsList>
        {boxes.map((box, index) => {
          return (
            <TeaOption
              key={index}
              box={box.node}
              handleClick={makeSelection}
              isChecked={isIncluded(box.node.id, selection)}
            ></TeaOption>
          );
        })}
      </OptionsList>
      <BtnWrap>
        {selection.length > 0 && (
          <StyledBtn isValid={selection.length > 0} handleClick={startCheckout}>
            Next
          </StyledBtn>
        )}
      </BtnWrap>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  &:before {
    content: '';
    width: 100%;
    height: 6px;
    background-color: var(--color-highlight);
  }
`;
const BtnWrap = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledBtn = styled(Btn)`
  padding: 10px 20px;
`;
const Title = styled(Heading)`
  padding-top: 20px;
  font-size: 1.8rem;
`;

export default Selection;
