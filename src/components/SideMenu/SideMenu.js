import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"

const SideMenu = styled.nav`
  height: 100%;
  width: 60%;
  max-width: 20rem;
  background: black;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  z-index: 200;
`
const NavLink = styled(Link)`
font-size: 1.2rem;
  color: white;
  color: #fffaf0;
  text-decoration: none;
  justify-content: center;
  &:hover {
    color: hsla(0, 100%, 100%, 0.7);
  }
`

export default () => (
  <SideMenu>
    <NavLink to="/how-it-works">How it works</NavLink>
    <NavLink to="/our-story">Our Story</NavLink>
    <NavLink to="/faq">FAQ</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/contact-us">Contact Us</NavLink>
  </SideMenu>
)