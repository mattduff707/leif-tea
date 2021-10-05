import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';
import CartContext from '../providers/cartProvider';
import CartItem from '../components/cart/cartItem';
import Heading from '../components/heading';

const Cart = () => {
  return (
    <Layout>
      <CartContext.Consumer>
        {(cart) => (
          <Wrapper>
            <Title tag="h1">Shopping Cart</Title>
            <CartList>
              {cart.cartContents.map((item) => (
                <CartItem item={item.node} />
              ))}
            </CartList>
          </Wrapper>
        )}
      </CartContext.Consumer>
    </Layout>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
`;
const Title = styled(Heading)`
  border-bottom: 6px solid var(--color-highlight);
  font-size: 2rem;
  padding: 0px 20px;
  margin-bottom: 20px;
`;
const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export default Cart;
