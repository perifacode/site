import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-perifacode.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return !data?.placeholderImage ? (
    <div>Picture not found</div>
  ) : (
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}

export default Logo
