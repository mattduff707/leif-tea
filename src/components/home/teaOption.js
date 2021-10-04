import React from "react";
import Option from "./option";
import greenTea from "../../images/greenTea.jpg";

import styled from "styled-components";

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

export default TeaOption;
