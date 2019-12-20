import { Link } from "gatsby"
import React, { useState } from 'react';
import NavBar from "./navbar"
import HamburgerButton from "./SideMenu/HamburgerButton"
import SideMenu from "./SideMenu/SideMenu"
import Backdrop from "./backdrop"

const state = {
  sideMenu: false
}

// const toggleSideMenu = () => {
//   return this.setState((prevState) => {sideMenu: !prevState.sideMenu})
// }

export default () => {

  let sideMenu;
  let hamburgerButton;

  const [curr] = useState(false);



    return(
      <header
        style={{
          position: 'fixed',
          width: '100%',
          background: `black`,
          top: '0rem'
        }}
      >
        <div
          style={{
            margin: `0 auto auto 1rem`,
            padding: `1.45rem 1.0875rem`,
            display: 'flex',
            height: '100%'
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Bonzai
            </Link>
          </h1>
          <NavBar/>
          <HamburgerButton onClick={() => {console.log('xxxxxxxxxxx')}}/>
          <SideMenu/>
          <Backdrop/>
        </div>
      </header>
    )
}