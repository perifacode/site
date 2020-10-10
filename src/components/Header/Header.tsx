import React from "react"
import Logo from "../logo"
import { Navigation } from "../legos/Navigation"
import Anchor from "../Anchor"
import StyledHeader from "./Header.style"
import { NavProps } from "../../props"

const Header = ({ siteTitle, navList }: NavProps) => {
  return (
    <StyledHeader>
      <h1 className="logo">
        <Logo alt={`Logo ${siteTitle}`} />
      </h1>

      <Navigation className="menu-list" navList={navList} />
    </StyledHeader>
  )
}

export default Header
