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

  return (
    <CartContext.Provider
      value={{
        cartContents: cartContents,
        addToCart: addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
