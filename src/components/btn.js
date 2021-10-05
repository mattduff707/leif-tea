import React from 'react';
import styled from 'styled-components';

const Btn = ({ className, children, handleClick }) => {
  return (
    <StyledBtn className={className} onClick={handleClick}>
      <BtnText>{children}</BtnText>
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 6px solid black;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  transition: color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  cursor: pointer;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 102%;
    height: 102%;
    background-color: var(--color-highlight);
    transform: translateY(100%);
    transition: transform;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
  &:hover:before {
    transform: translateY(0%);
  }
  &:hover {
    color: white;
  }
`;
const BtnText = styled.span`
  display: block;
  position: relative;
`;

export default Btn;
