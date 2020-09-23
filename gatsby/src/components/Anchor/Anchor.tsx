import React, { ReactNode } from "react"
import { Link } from "gatsby"
import StyledAnchor from "./Anchor.style"

export interface AnchorProps {
  to?: string
  href?: string
  children: ReactNode
}

const Anchor = ({ to, href, children }: AnchorProps) => {
  return (
    <StyledAnchor>
      <div className="anchor-wrapper">
        {href ? (
          <a className="anchor-link" href={href}>
            {children}
          </a>
        ) : (
          <Link className="anchor-link" to={to}>
            {children}
          </Link>
        )}
      </div>
    </StyledAnchor>
  )
}

export default Anchor
