import React from "react";
import styled from "styled-components";
import Btn from "../btn";

const Inactive = ({ startGuide }) => {
  return (
    <Wrapper>
      <Btn handleClick={startGuide}>Get started</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Inactive;
