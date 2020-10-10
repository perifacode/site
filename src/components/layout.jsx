import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { theme } from '../utils/theme'
import navLinks from '../../config/nav-links'
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {

  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query PerifaMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header 
          navList={navLinks}
          siteTitle={title || `Title`} />
        <main>{children}</main>
        <Footer navList={navLinks} />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
