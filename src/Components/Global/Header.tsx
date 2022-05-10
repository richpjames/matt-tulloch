import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";

import { BasketIcon } from "./BasketIcon";

const Nav = styled.nav`
  display: flex;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  width: min(95vw, 850px);
  margin-top: 4vh;
  a {
    color: #f5ee18;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 2.5vh;
    width: 100%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-top: 2px;
  margin-top: 2.5vh;
  justify-content: space-between;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media only screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const NavItem = styled.li`
  height: 20px;
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
  const [href, setHref] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== undefined) setHref(window.location.href);
  }, []);

  const isInShop = !/shop/.test(href);

  return (
    <HeaderElement>
      <Nav>
        <NavLinks>
          <NavItem aria-label="contact" className="contact">
            <a href="mailto:hello@tulltulloch.com">Contact</a>
          </NavItem>
          <NavItem aria-label="instagram" className="instagram">
            <a
              href="https://www.instagram.com/tulltulloch/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </NavItem>
          {isInShop && (
            <NavItem aria-label="shop" className="shop">
              <a href="/shop">Shop</a>
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
