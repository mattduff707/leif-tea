import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../heading';
import Option from './option';
import greenTea from '../../images/greenTea.jpg';
import eitherTea from '../../images/eitherTea.png';
import blackTea from '../../images/blackTea.jpg';
import OptionsList from './optionsList';

const Boxes = ({ selectBox }) => {
  const greenTeaLabel = 'Green Tea';
  const bothTeaLabel = 'Both';
  const blackTeaLabel = 'Black Tea';

  const [selection, setSelection] = useState(null);

  const handleClick = (e) => {
    setSelection(() => e.target.value);
    selectBox(e.target.value);
  };
  return (
    <Wrapper>
      <Title>What tea do you prefer?</Title>
      <OptionsList>
        <Option
          type="radio"
          label={greenTeaLabel}
          value={greenTeaLabel}
          name="box"
          img={greenTea}
          isChecked={selection === greenTeaLabel}
          handleClick={handleClick}
        />
        <Option
          type="radio"
          label={bothTeaLabel}
          value={bothTeaLabel}
          name="box"
          img={eitherTea}
          isChecked={selection === bothTeaLabel}
          handleClick={handleClick}
        />
        <Option
          type="radio"
          label={blackTeaLabel}
          value={blackTeaLabel}
          name="box"
          img={blackTea}
          isChecked={selection === blackTeaLabel}
          handleClick={handleClick}
        />
      </OptionsList>
      <Description>
        <i>
          Each box will include 4 bags of tea. Each bag amounts to 16 cups of tea. This will allow about 2 cups of tea
          per day for a month before a box runs out.
        </i>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled(Heading)``;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  font-weight: 600;
`;

export default Boxes;
