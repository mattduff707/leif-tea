import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Boxes from "./boxes";
import Checkout from "./checkout";
import Inactive from "./inactive";
import Selection from "./selection";
import Heading from "../heading";
import { useStaticQuery, graphql } from "gatsby";

const Guide = () => {
  const [isInactive, setIsInactive] = useState(true);
  const [boxes, setBoxes] = useState(false);
  const [isSelection, setIsSelection] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [products, setProducts] = useState([]);
  // const [guideCart, setGuideCart] = useState([]);
  const data = useStaticQuery(graphql`
    query MyQuery {
      allShopifyProduct {
        edges {
          node {
            handle
            id
            title
            tags
          }
        }
      }
    }
  `);
  const nodesArr = data.allShopifyProduct.edges;
  // const tagArr = nodesArr
  //   .map((product) => product.node.tags)
  //   .flat()
  //   .filter((tag, index, arr) => arr.indexOf(tag) === index);
  // console.log(tagArr);

  useEffect(() => {
    setProducts(nodesArr);
  }, [nodesArr]);

  const startGuide = () => {
    setIsInactive(false);
  };
  const selectBox = (tag) => {
    const productsArr = nodesArr.filter((product) =>
      product.node.tags.includes(tag)
    );
    setBoxes(productsArr);
  };
  const startSelection = (tag) => {
    setIsSelection(true);
  };
  const startCheckout = () => {
    setIsCheckout(true);
  };

  return (
    <Wrapper>
      {isInactive && <Inactive startGuide={startGuide} />}

      {!isInactive && (
        <>
          <Title tag="h1">Let's find you the perfect box</Title>
          <Boxes selectBox={selectBox} />
        </>
      )}
      {boxes && <Selection boxes={boxes} />}
      {isCheckout && <Checkout />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid green; */
`;
const Title = styled(Heading)`
  font-size: 2rem;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 6px solid var(--color-highlight);
`;

export default Guide;
