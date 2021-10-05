import '@fontsource/maven-pro';
import { CartProvider } from './src/providers/cartProvider';
import React from 'react';

export const wrapRootElement = ({ element }) => <CartProvider>{element}</CartProvider>;
