import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Heading from '../heading';
import Btn from '../btn';
const CheckoutItem = ({ node, deleteItem }) => {
  const handleClick = () => {
    deleteItem(node.id);
  };

  return (
    <Wrapper>
      <Title tag="h3">{node.title}</Title>
      <TeaList>
        {node.images.map((image, index) => {
          const imageData = getImage(image.gatsbyImageData);
          return (
            <TeaItem key={index}>
              <ImgWrap>
                <GatsbyImage image={imageData} alt={image.altText} />
              </ImgWrap>
              <TeaText>{image.altText}</TeaText>
            </TeaItem>
          );
        })}
      </TeaList>
      <Price>${parseInt(node.priceRangeV2.maxVariantPrice.amount)}</Price>
      <Controls>
        <StyledBtn handleClick={handleClick}>Delete</StyledBtn>
      </Controls>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 240px;
  box-sizing: content-box;
  /* max-width: 240px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 6px solid var(--color-main);
  border-radius: 15px;
  padding: 10px;
  margin: 0px 10px 10px;
`;
const Title = styled(Heading)`
  margin-bottom: 10px;
  font-size: 1.4rem;
  border-bottom: 6px solid var(--color-highlight);
`;
const TeaList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const TeaItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`;
const ImgWrap = styled.div`
  width: 100px;
  height: auto;
  margin-right: 5px;
`;
const TeaText = styled.p`
  white-space: normal;
  width: 140px;
`;
const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;
const StyledBtn = styled(Btn)`
  font-size: 1rem;
`;

export default CheckoutItem;
