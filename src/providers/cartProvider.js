import React, { useState } from 'react';

const defaultState = {
  name: 'green tea',
  price: '$12',
};

const cartContext = React.createContext(defaultState);

const CartProvider = (props) => {
  const [cartContents, setCartContents] = useState([{ name: 'green tea', price: '$12' }]);

  const addToCart = (obj) => {
    setCartContents(() => [...cartContents, obj]);
  };

  return (
    <cartContext.Provider
      value={{
        cartContents,
        addToCart: addToCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;
export { CartProvider };
