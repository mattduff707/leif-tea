import React from 'react';
// import CartContext from '../../providers/cartProvider';
import CheckoutItem from './checkoutItem';
import styled from 'styled-components';
import Heading from '../heading';
import Btn from '../btn';
import { Link } from 'gatsby';

const Checkout = ({ products, selection, deleteItem, cart, addToCart }) => {
  // return <CartContext.Consumer>{(cart) => <div>Checkout</div>}</CartContext.Consumer>;
  const selectedItems = products.filter((product) => selection.includes(product.node.id));
  const total = selectedItems.reduce((acc, val) => acc + parseInt(val.node.priceRangeV2.maxVariantPrice.amount), 0);
  const cartTotal = cart.reduce((acc, val) => acc + parseInt(val.node.priceRangeV2.maxVariantPrice.amount), 0);

  const handleCheckout = () => {
    addToCart(selectedItems);
  };

  return (
    <Wrapper>
      <Title tag="h2">Overview</Title>
      <ItemWrap>
        {selectedItems.map((product, index) => {
          const node = product.node;
          return (
            <CheckoutItem key={index} node={node} deleteItem={deleteItem}>
              {product.node.title}
            </CheckoutItem>
          );
        })}
      </ItemWrap>
      <TotalPrice>Total: ${total}</TotalPrice>
      <Link to="/cart">
        <Btn handleClick={handleCheckout}>Add to cart</Btn>
      </Link>
      <CartTotal>
        <i>{cart.length > 0 ? `Cart Total: $${cartTotal} before adding` : `Cart is currently Empty`}</i>
      </CartTotal>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &:before {
    content: '';
    width: 100%;
    height: 6px;
    background-color: var(--color-highlight);
  }
`;
const Title = styled(Heading)`
  padding-top: 20px;
  font-size: 1.8rem;
`;

const ItemWrap = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const TotalPrice = styled.p`
  padding: 10px 0px;
  font-size: 1.4rem;
  font-weight: 600;
`;
const CartTotal = styled(TotalPrice)`
  font-weight: 400;
  font-size: 1.2rem;
`;

export default Checkout;
