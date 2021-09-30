import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

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

const layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <Navbar>
          <NavList>
            <LogoWrapper>
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                width={51}
                height={67}
                src="../images/logoSmall.png"
                alt="Leif logo"
              />
            </LogoWrapper>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/shop">shop</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </NavList>
        </Navbar>
      </Header>
      <MainBody>{children}</MainBody>
    </Wrapper>
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

const LogoWrapper = styled.div`
  padding: 0px 15px;
`;
const NavLink = styled(Link)`
  color: black;
  padding: 10px 15px;
  font-size: 1.4rem;
`;
const MainBody = styled.main`
  grid-area: content;
`;

export default layout;
