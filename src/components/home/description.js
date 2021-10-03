import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DescriptionItem from './descriptionItem';

const Description = ({ selection, boxes }) => {
  const [content, setContent] = useState([]);

  //   console.log(boxes);
  useEffect(() => {
    if (selection.length > 0) {
      console.log('tester');
      setContent(() => {
        return boxes.filter((box) => selection.includes(box.node.id));
      });
    } else {
      setContent([]);
    }
  }, [boxes, selection]);
  if (content.length > 0) {
    return (
      <Wrapper>
        {content.map((item) => {
          return <DescriptionItem item={item} />;
        })}
      </Wrapper>
    );
  }
  return <Wrapper>Descriptions will be here</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid red;
`;

export default Description;
