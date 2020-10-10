import React, { ReactNode } from "react"
import { Link } from "gatsby"
import StyledAnchor from "./Anchor.style"
import { AnchorProps } from "../../props"

const Anchor = ({ to, href, children }: AnchorProps) => {
  return (
    <StyledAnchor>
      <div className="anchor-wrapper">
        {href ? (
          <a className="anchor-link" href={href} target="blank">
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
