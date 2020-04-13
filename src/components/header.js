import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = () => (
  <header className="header">
    <div className="header-name">Scott Sandman</div>
    <ul className="header-list">
      <li className="header-list-item">
        <a href="https://www.linkedin.com/in/scott-sandman/">LinkedIn</a>
      </li>
      <li className="header-list-item">
        <a href="https://github.com/ScottSandman">Github</a>
      </li>
      <li className="header-list-item">
        <a href="mailto:scottesandman@gmail.com?Subject=">Contact</a>
      </li>
      <Link to="/"></Link>
    </ul>
  </header>
)

export default Header
