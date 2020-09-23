import React from "react"
import Logo from "../logo"
import StyledHeader from './Header.style'

type HeaderProps = {
  siteTitle: string
}

const Header = ({siteTitle}: HeaderProps) => {
  return (
    <StyledHeader>
      <h1 title={siteTitle}>
        <Logo />
      </h1>
    </StyledHeader>
  )
}

export default Header
