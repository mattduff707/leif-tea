import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Boxes from './boxes';
import Checkout from './checkout';
import Inactive from './inactive';
import Selection from './selection';
import Heading from '../heading';
import CartContext from '../../providers/cartProvider';
import { useStaticQuery, graphql } from 'gatsby';

const Guide = () => {
  const [isInactive, setIsInactive] = useState(true);
  const [boxes, setBoxes] = useState(false);
  const [selection, setSelection] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [products, setProducts] = useState([]);
  // const [guideCart, setGuideCart] = useState([]);
  const data = useStaticQuery(graphql`
    query MyQuery {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            handle
            id
            title
            tags
            description
            images {
              src
              gatsbyImageData(layout: FULL_WIDTH)
              altText
            }
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
            }
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
    const productsArr = nodesArr.filter((product) => product.node.tags.includes(tag));
    setSelection([]);
    setBoxes(productsArr);
  };
  const isIncluded = (val, arr) => arr.includes(val);
  const makeSelection = (e) => {
    const val = e.target.value;

    if (isIncluded(val, selection)) {
      setSelection(() => selection.filter((item) => item !== val));
    } else {
      setSelection([...selection, val]);
    }
  };

  useEffect(() => {
    if (selection.length < 1) {
      setIsCheckout(false);
    }
  }, [setIsCheckout, selection]);

  const startCheckout = () => {
    setIsCheckout(true);
  };
  const deleteItem = (id) => {
    setSelection(() => selection.filter((val) => val !== id));
  };

  return (
    <CartContext.Consumer>
      {(cart) => (
        <Wrapper>
          {isInactive && <Inactive startGuide={startGuide} />}

          {!isInactive && (
            <>
              <Title tag="h1">Let's find you the perfect box</Title>
              <Boxes selectBox={selectBox} />
            </>
          )}
          {boxes && (
            <Selection
              boxes={boxes}
              makeSelection={makeSelection}
              selection={selection}
              isIncluded={isIncluded}
              startCheckout={startCheckout}
            />
          )}

          {isCheckout && (
            <Checkout
              cart={cart.cartContents}
              addToCart={cart.addToCart}
              products={products}
              selection={selection}
              deleteItem={deleteItem}
            />
          )}
        </Wrapper>
      )}
    </CartContext.Consumer>
  );
};

const Wrapper = styled.div`
  max-width: 1600px;
  padding: 20px 0px 100px;
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
