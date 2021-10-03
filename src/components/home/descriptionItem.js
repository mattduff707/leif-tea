import React from 'react';
import styled from 'styled-components';
import Heading from '../heading';
import ImgView from './imgView';

const DescriptionItem = ({ item }) => {
  const node = item.node;
  return (
    <Wrapper>
      <Heading tag="h3">{node.title}</Heading>
      <ImgView imgArr={node.images} />
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default DescriptionItem;
