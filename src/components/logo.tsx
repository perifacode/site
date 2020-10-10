import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-perifacode.png" }) {
        childImageSharp {
          fluid(maxWidth: 915, quality: 90) {
            aspectRatio
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return !data?.placeholderImage ? (
    <div>Imagem não encontrada</div>
  ) : (
    <Img alt={alt} fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}

export default Logo
