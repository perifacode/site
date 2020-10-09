import React from "react"
import Logo from "../logo"
import Anchor from '../Anchor'
import StyledHeader from "./Header.style"
import { HeaderProps } from "../../props"


const Header = ({ siteTitle, navList }: HeaderProps) => {
  return (
    <StyledHeader>
      <h1 className="logo">
        <Logo alt={`Logo ${siteTitle}`} />
      </h1>

      <nav className="menu">
        <ul className="menu-list">
          {navList.map(anchor => <Anchor href={anchor.href} to={anchor.to}>{anchor.children}</Anchor>)}
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
