import React, { useState } from "react"
import Hamburger from "../Hamburger"
import Anchor from "../Anchor"
import { Link } from "gatsby"
import Logo from "../logo"
import { Navigation } from "../legos/Navigation"
import StyledFooter from "./Footer.style"
import { NavProps } from "../../props"

const Footer = ({ navList }: NavProps) => {
  const [openMenu, toggleMenu] = useState(false)
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <div className="copyright">
          <div className="logo">
            <Link to="/">
              <Logo alt="Logo perifaCode" />
            </Link>
          </div>
          <p>© PerifaCode 2020. Todos os direitos Reservados.</p>
        </div>
        <div className="contact">
          <p><strong>Contato:</strong></p>
          <p>perifacode@gmail.com</p>
        </div>
      </div>

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
