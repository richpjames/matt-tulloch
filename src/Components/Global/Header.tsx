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
    width: 100%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  padding-top: 2px;
  margin-top: 2.5vh;
  justify-content: space-between;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    width: 100%;
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const NavItem = styled.li`
  height: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.6rem;
  display: inline;
  @media only screen and (min-width: 600px) {
    padding-left: 0rem;
    padding-right: 0rem;
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
  const isInShop =
    typeof window !== undefined && !/shop/.test(window.location.href);
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
          {isInShop && (
            <NavItem aria-label="shop" className="shop">
              <a href="/shop">shop</a>
            </NavItem>
          )}
        </NavLinks>
      </Nav>

      {!isInShop && (
        <Basket to="/basket">
          <BasketIcon />
        </Basket>
      )}
    </HeaderElement>
  );
};
