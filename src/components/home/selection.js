import React from 'react';
import TeaOption from './teaOption';
import OptionsList from './optionsList';
import styled from 'styled-components';
import Btn from '../btn';

const Selection = ({ boxes, selection, makeSelection, isIncluded, startCheckout }) => {
  return (
    <Wrapper>
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
      {selection.length > 0 && (
        <StyledBtn isValid={selection.length > 0} handleClick={startCheckout}>
          Next
        </StyledBtn>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledBtn = styled(Btn)`
  padding: 10px 20px;
`;

export default Selection;
