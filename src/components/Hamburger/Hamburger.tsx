import React, { useState } from "react"

import StyledHamburger from "./Hamburger.style"

type HamburgerProps = {
  onClick: (open: boolean) => void
}

const Hamburger = ({ onClick }: HamburgerProps) => {
  const [open, toggleOpen] = useState(false)
  const handleClick = (open: boolean) => {
    toggleOpen(open)
    onClick(open)
  }
  return (
    <StyledHamburger
      className={open ? "opened" : ""}
      onClick={() => handleClick(!open)}
    >
      <button className="button-hamburger"></button>
    </StyledHamburger>
  )
}

export default Hamburger
