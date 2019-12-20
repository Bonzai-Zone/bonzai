import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

const NavBar = styled.nav`
  color: white;
  justify-content: 'flex-end';
  margin: 0.8rem 4rem auto auto;
`;

const NavLink = styled(Link)`
  padding-left: 4rem;
  color: #fffaf0;
  text-decoration: none;
  &:hover {
    color: hsla(0, 100%, 100%, 0.7);
  }
  &:active {
    color: #2aa275
  }
`;

export default () => (
  <NavBar>
    <NavLink to="/how-it-works">How it works</NavLink>
    <NavLink to="/our-story">Our Story</NavLink>
    <NavLink to="/faq">FAQ</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/contact-us">Contact Us</NavLink>
  </NavBar>
);