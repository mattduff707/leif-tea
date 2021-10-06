import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';
import CartContext from '../providers/cartProvider';
import CartItem from '../components/cart/cartItem';
import Heading from '../components/heading';
import Overview from '../components/cart/overview';

const Cart = () => {
  return (
    <Layout>
      <CartContext.Consumer>
        {(cart) => (
          <Wrapper>
            <Title tag="h1">Shopping Cart</Title>

            {cart.cartContents.length < 1 ? (
              <Heading>Cart is empty</Heading>
            ) : (
              <>
                <Overview getTotal={cart.getTotal} />
                <CartList>
                  {cart.cartContents.map((item) => (
                    <CartItem removeFromCart={cart.removeFromCart} item={item.node} />
                  ))}
                </CartList>
              </>
            )}
          </Wrapper>
        )}
      </CartContext.Consumer>
    </Layout>
  );
};

const Wrapper = styled.section`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 2px solid red; */
`;
const Title = styled(Heading)`
  border-bottom: 6px solid var(--color-highlight);
  font-size: 2rem;
  padding: 0px 20px;
  padding-bottom: 4px;
  margin-bottom: 20px;
`;
const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Cart;
