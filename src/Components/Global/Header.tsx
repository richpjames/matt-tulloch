import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { CartContext } from "../Basket/CartProvider";

const Nav = styled.nav`
  display: flex;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  @media only screen and (min-width: 600px) {
    margin-top: 2.5vh;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding-top: 2px;
  margin-top: 2.5vh;
  justify-content: space-between;
`;
const NavItem = styled.li`
  height: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
  display: inline;
  @media only screen and (min-width: 600px) {
    padding-left: 0.5rem
    padding-right: 0.5rem;
  }
`;

export const Header = () => {
  const { count } = useContext(CartContext);
  return (
    <Nav>
      <NavLinks>
        <NavItem aria-label="contact" className="contact">
          <a href="mailto:contact@tulltulloch.com">contact</a>
        </NavItem>
        <NavItem aria-label="basket" className="basket">
          <Link to="/basket">basket</Link>
          <br></br>
          count: {`${count}`}
        </NavItem>
      </NavLinks>
    </Nav>
  );
};
