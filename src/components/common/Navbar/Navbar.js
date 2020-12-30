import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['Sobre', 'Blog', 'Eventos', 'Mídia'];

const Navbar = (props) => {
  const [mobileMenuOpen, toggleMenu] = useState(false)

  const toggleMobileMenu = () => {
    const mobileMenuState = mobileMenuOpen;
    toggleMenu(!mobileMenuState)
  };

  const getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={() => toggleMenu(false)}>
      {item}
    </AnchorLink>
  );

  const getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  const data = useStaticQuery(graphql`
  query {
    logo_perifa: file(
      sourceInstanceName: { eq: "art" }
      name: { eq: "default" }
    ) {
      childImageSharp {
        fluid(maxWidth: 760) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`);
console.log(data.logo_perifa.childImageSharp.fluid)
  return(
    <Nav {...props}>
      <StyledContainer>
        <Brand><img 
          src={data.logo_perifa.childImageSharp.fluid.src}
          style={{ width: 120 }}
        /></Brand>
        
        <Mobile>
          <button onClick={toggleMobileMenu} style={{ color: 'black' }}>
            <MenuIcon />
          </button>
        </Mobile>

        <Mobile hide>{getNavList({})}</Mobile>
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList({ mobile: true })}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  )
}

export default Navbar;
