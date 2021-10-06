import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import CartContext from '../providers/cartProvider';

const GlobalStyle = createGlobalStyle`
  html {
    --color-main: hsl(0,0%,0%);
    --color-highlight: hsl(156,65%,28%);
  }



  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Maven Pro";
  }
  *:before, *:after {
    box-sizing: border-box
  }
  html, body {
      height: 100%;
      width: 100%;
      /* background-color: red; */
  }
`;

const Layout = ({ children }) => {
  const activeStyle = {
    backgroundColor: 'var(--color-highlight)',
    color: 'white',
    borderRadius: '15px',
  };

  return (
    <CartContext.Consumer>
      {(cart) => (
        <Wrapper>
          <GlobalStyle />
          <>
            <Header>
              <Navbar>
                <NavList>
                  <LogoWrapper to="/">
                    <StaticImage
                      placeholder="blurred"
                      layout="fixed"
                      width={51}
                      height={67}
                      src="../images/logoSmall.png"
                      alt="Leif logo"
                    />
                  </LogoWrapper>
                  <NavLink activeStyle={activeStyle} to="/about">
                    about
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/shop">
                    shop
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/contact">
                    contact
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/cart">
                    cart({cart.cartContents.length})
                  </NavLink>
                </NavList>
              </Navbar>
            </Header>
            <MainBody cart={cart.cartContents} addToCart={cart.addToCart}>
              {children}
            </MainBody>
          </>
        </Wrapper>
      )}
    </CartContext.Consumer>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    'header'
    'content';
`;
const Header = styled.header`
  grid-area: header;
  /* background-color: blue; */
  height: 100%;
  width: 100%;
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  height: 100%;
  width: 100%;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  /* border: 2px solid black; */
`;

const LogoWrapper = styled(Link)`
  padding: 0px 15px;
`;
const NavLink = styled(Link)`
  color: black;
  padding: 10px 15px;
  font-size: 1.4rem;
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    height: 6px;
    width: 0%;
    background-color: var(--color-highlight);
    display: block;
    transition: width;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
  &:hover:after {
    width: 100%;
  }
`;
const MainBody = styled.main`
  grid-area: content;
  display: flex;
  justify-content: center;
  padding: 0px 10px 50px;
`;

export default Layout;
