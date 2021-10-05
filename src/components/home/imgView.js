import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ImgView = ({ imgArr }) => {
  return (
    <Wrapper>
      {imgArr.map((img, index) => {
        const image = getImage(img);
        return (
          <ImgWrap key={index}>
            <GatsbyImage image={image} alt={img.altText} />
            <p>{img.altText}</p>
          </ImgWrap>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ImgWrap = styled.div`
  width: 100px;
  height: auto;
`;

export default ImgView;
