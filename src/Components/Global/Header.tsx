import React from "react";
import styled from "styled-components/macro";
import { Link } from "@reach/router";

const Nav = styled.nav`
  display: flex;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  @media only screen and (min-width: 600px) {
    margin-top: 5vh;
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
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const Header = () => {
  return (
    <Nav>
      <NavLinks>
        {navItems.map((navItem, index) => {
          return (
            <React.Fragment key={index}>
              <NavItem key={index}>
                <Link
                  to={navItem.link}
                  aria-label={navItem.ariaLabel}
                  className={navItem.className}
                >
                  {navItem.content}
                </Link>
              </NavItem>
            </React.Fragment>
          );
        })}
      </NavLinks>
    </Nav>
  );
};

const navItems = [
  // {
  //   link: "/shop",
  //   ariaLabel: "Shop link",
  //   content: "shop",
  //   className: "shop",
  // },
  {
    link: "/contact",
    ariaLabel: "contact page",
    content: "contact",
    className: "contact",
  },
  {
    link: "/basket",
    ariaLabel: "Basket link",
    content: "basket",

    className: "basket",
  },
];
