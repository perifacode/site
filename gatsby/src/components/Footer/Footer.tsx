import React, { useState } from "react"
import Hamburger from "../Hamburger"
import Anchor from "../Anchor"
import StyledFooter from "./Footer.style"

const Footer = () => {
  const [openMenu, toggleMenu] = useState(false)
  return (
    <StyledFooter>
      <nav className="menu-footer">
        <Hamburger onClick={() => toggleMenu(!openMenu)} />
        <ul className={`menu-footer-list ${openMenu ? "open" : ""}`}>
          <li className="menu-footer-item">
            <Anchor to="/sobre">Sobre</Anchor>
            <Anchor to="/sobre">Blog</Anchor>
            <Anchor to="/sobre">Eventos</Anchor>
            <Anchor to="/sobre">Mídia</Anchor>
            <Anchor to="/sobre">Organizadores</Anchor>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  )
}

export default Footer
