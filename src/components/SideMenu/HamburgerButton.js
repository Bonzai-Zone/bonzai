import React from "react"
import styled from 'styled-components';

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0.7rem;
  height: 1.5rem;
  width: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`
const HamburgerLine = styled.div`
  background: white;
  width: 2.2rem;
  height: 0.1rem;
`

export default (props) => (
  <HamburgerButton onClick={() => {console.log('sde')}}>
    <HamburgerLine></HamburgerLine>
    <HamburgerLine></HamburgerLine>
    <HamburgerLine></HamburgerLine>
  </HamburgerButton>
)