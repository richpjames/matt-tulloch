import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";

import { BasketIcon } from "./BasketIcon";

const Nav = styled.nav`
  display: flex;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  width: 90%;
  @media only screen and (min-width: 600px) {
    margin-top: 2.5vh;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-top: 2px;
  margin-top: 2.5vh;
  justify-content: space-between;
`;

const NavItem = styled.li`
  height: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.6rem;
  display: inline;
  @media only screen and (min-width: 600px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const HeaderElement = styled.header`
  display: flex;
`;

const Basket = styled(Link)`
  margin-top: 2rem;
  @media only screen and (max-width: 600px) {
    margin-right: 2rem;
  }
`;

export const Header = () => {
  return (
    <HeaderElement>
      <Nav>
        <NavLinks>
          <NavItem aria-label="contact" className="contact">
            <a href="mailto:hello@tulltulloch.com">contact</a>
          </NavItem>
          <NavItem aria-label="instagram" className="instagram">
            <a
              href="https://www.instagram.com/tulltulloch/"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </NavItem>
          {typeof window !== undefined && !/shop/.test(window.location.href) && (
            <NavItem aria-label="shop" className="shop">
              <a href="/shop">shop</a>
            </NavItem>
          )}
        </NavLinks>
      </Nav>
      <Basket to="/basket">
        <BasketIcon />
      </Basket>
    </HeaderElement>
  );
};
