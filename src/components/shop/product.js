import React from 'react';
import styled from 'styled-components';
import Heading from '../heading';
import { Link } from 'gatsby';

const Product = ({ title, image, price, description, handle }) => {
  return (
    <NavLink to={handle}>
      <Wrapper>
        <Title>{title}</Title>
        <ImgWrap>
          <Image src={image} alt={'alt'} />
        </ImgWrap>
        <Price>${parseInt(price)}</Price>
        <Description>{description}</Description>
      </Wrapper>
    </NavLink>
  );
};

const NavLink = styled(Link)`
  text-decoration: none;
  color: initial;
  margin: 0px 10px 10px;
`;

const Wrapper = styled.article`
  width: 300px;
  height: 100%;
  border: 6px solid var(--color-main);
  border-radius: 15px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: border-color ease 0.2s;
  &:hover {
    border-color: var(--color-highlight);
  }
`;

const Title = styled(Heading)`
  border-bottom: 6px solid var(--color-highlight);
  padding-bottom: 4px;
`;
const ImgWrap = styled.div`
  width: 100%;
  position: relative;
  margin: 10px 0px;
  &:before {
    content: 'Details';
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-highlight);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity ease 0.2s;
  }
  ${Wrapper}:hover &:before {
    opacity: 0.85;
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 6px solid var(--color-main);
  display: block;
`;
const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Description = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  padding: 5px;
`;

export default Product;
