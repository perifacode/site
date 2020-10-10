import React from "react"
import Anchor from '../Anchor'

const Navigation = ({ navList, className }) => 
  <nav className="menu">
    <ul className={className}>
      { navList.map(anchor => (
        <li>
          <Anchor href={anchor.href} to={anchor.to}>{anchor.children}</Anchor>
        </li>)) }
    </ul>
  </nav>

export { Navigation };
