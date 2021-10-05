import React from 'react';
import styled from 'styled-components';
import Heading from '../heading';
import greenTea from '../../images/greenTea.jpg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Btn from '../btn';

const CartItem = ({ item, removeFromCart }) => {
  const handleClick = () => {
    removeFromCart(item.id);
  };
  return (
    <Wrapper>
      <Title tag="h2">{item.title}</Title>
      <ImgWrap>
        <Image src={greenTea} alt="green tea" />
      </ImgWrap>
      <TeaWrap>
        <Title>Includes:</Title>
        {item.images.map((image) => {
          const imageData = getImage(image.gatsbyImageData);
          return (
            <TeaItem>
              <TeaImg>
                <GatsbyImage image={imageData} alt={image.altText} />
              </TeaImg>
              <TeaText>{image.altText}</TeaText>
            </TeaItem>
          );
        })}
        <BtnWrap>
          <DeleteBtn handleClick={handleClick}>Delete</DeleteBtn>
        </BtnWrap>
      </TeaWrap>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: 6px solid var(--color-main);
  border-radius: 15px;
  padding: 8px 16px;
  width: 280px;
  margin: 0px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* &:first-child {
    margin: 0px 10px 10px 0px;
  }
  &:last-child {
    margin: 0px 0px 10px 10px;
  } */
`;
const Title = styled(Heading)`
  border-bottom: 6px solid var(--color-highlight);
  padding-bottom: 4px;
  text-align: center;
`;
const ImgWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 6px solid black;
`;
const TeaWrap = styled.ul`
  list-style: none;
`;
const TeaItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
`;
const TeaImg = styled.div`
  width: 100px;
  height: auto;
`;
const TeaText = styled.p`
  width: 160px;
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;
const DeleteBtn = styled(Btn)`
  font-size: 1rem;
`;

export default CartItem;
