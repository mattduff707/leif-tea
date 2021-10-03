import React, { useState } from 'react';
import TeaOption from './teaOption';
import OptionsList from './optionsList';
import styled from 'styled-components';

const Selection = ({ boxes }) => {
  const [selection, setSelection] = useState([]);

  const isIncluded = (val, arr) => arr.includes(val);
  const handleClick = (e) => {
    const val = e.target.value;

    if (isIncluded(val, selection)) {
      setSelection(() => selection.filter((item) => item !== val));
    } else {
      setSelection([...selection, val]);
    }
  };

  // return (
  //   <>
  //     {boxes.map((e, index) => {
  //       console.log(e.node.images);
  //       return (
  //         <div key={index}>
  //           <h1>{e.node.title}</h1>
  //           {e.node.images.map((img, index) => {
  //             const image = getImage(img);
  //             console.log(img);
  //             return (
  //               <ImgWrap key={index}>
  //                 <GatsbyImage image={image} alt={img.altText} />
  //               </ImgWrap>
  //             );
  //           })}
  //         </div>
  //       );
  //     })}
  //   </>
  // );
  return (
    <Wrapper>
      <OptionsList>
        {boxes.map((box, index) => {
          return (
            <TeaOption
              key={index}
              box={box.node}
              handleClick={handleClick}
              isChecked={isIncluded(box.node.id, selection)}
            ></TeaOption>
          );
        })}
      </OptionsList>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Selection;
