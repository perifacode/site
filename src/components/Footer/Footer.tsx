import React, { useState } from "react"
import Hamburger from "../Hamburger"
import Anchor from "../Anchor"
import { Navigation } from "../legos/Navigation"
import StyledFooter from "./Footer.style"
import { NavProps } from "../../props"

const Footer = ({ navList }: NavProps) => {
  const [openMenu, toggleMenu] = useState(false)
  return (
    <StyledFooter>
      <nav className="menu-footer">
        <Hamburger onClick={() => toggleMenu(!openMenu)} />
        <Navigation
          className={`menu-footer-list ${openMenu ? "open" : ""}`}
          navList={navList}
        />
      </nav>
    </StyledFooter>
  )
}

export default Footer
