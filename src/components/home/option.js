import React from 'react';
import styled from 'styled-components';

const Option = ({ label, img, name, isChecked, handleClick, type, value }) => {
  return (
    <Wrapper>
      <BoxLabel isChecked={isChecked} htmlFor={label}>
        <ImgWrap>
          <Image isChecked={isChecked} src={img} />
        </ImgWrap>
        <Highlight isChecked={isChecked}>{label}</Highlight>
        <StyledInput type={type} id={label} name={name} value={value} checked={isChecked} onChange={handleClick} />
      </BoxLabel>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  align-items: center;
`;
const ImgWrap = styled.div`
  height: 240px;
  width: 240px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid ${(props) => (props.isChecked ? 'var(--color-highlight)' : 'var(--color-main)')};
  transition: border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  background-color: white;
  position: relative;
  z-index: 10;
  ${Wrapper}:hover & {
    border-color: var(--color-highlight);
  }
`;

const Highlight = styled.span`
  /* border: 2px solid red; */
  overflow: ${(props) => (props.isChecked ? 'visible' : 'hidden')};

  padding: 0px 10px;
  position: relative;
  color: ${(props) => (props.isChecked ? 'white' : 'var(--color-main)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6px;
  max-width: 220px;
  text-align: center;
  transition: color;
  transition-duration: 0.4s;
  transition-timing-function: ease;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 200px;
    background-color: var(--color-highlight);
    transform: ${(props) => (props.isChecked ? 'translate(0%, -100%)' : 'translate(-101%, -6px)')};
    position: absolute;
    top: 100%;
    /* left: 0; */
    transition: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    z-index: -1;
    border-radius: 0px 0px 10px 10px;
  }
`;
const BoxLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover ${Highlight}:after {
    transform: ${(props) => !props.isChecked && 'translate(0%, -6px)'};
  }
`;
const StyledInput = styled.input`
  appearance: none;
`;

export default Option;
