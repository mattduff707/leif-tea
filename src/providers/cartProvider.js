import React, { useState } from 'react';

const defaultState = [];

const CartContext = React.createContext(defaultState);

const CartProvider = ({ children }) => {
  const [cartContents, setCartContents] = useState(defaultState);

  const addToCart = (arr) => {
    const newCart = [...cartContents, arr].flat();
    const filteredCart = newCart.filter((item, index) => newCart.indexOf(item) === index);
    setCartContents(() => filteredCart);
  };
  const removeFromCart = (id) => {
    const newCart = cartContents.filter((item) => item.node.id !== id);
    setCartContents(newCart);
  };
  const getTotal = () => {
    return cartContents.reduce((acc, val) => acc + parseInt(val.node.priceRangeV2.maxVariantPrice.amount), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartContents: cartContents,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        getTotal: getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
