import { Link } from "gatsby"
import React from "react"
import NavBar from "./navbar"

export default () => (
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
        display: 'flex'
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
    </div>
  </header>
)
