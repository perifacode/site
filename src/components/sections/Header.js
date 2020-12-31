import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "slide-fundo-1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
          <Carousel
            autoplay
            infiniteLoop
            dynamicHeight
            showThumbs={false}>
              <div>
                  <Img fluid={data.art_build.childImageSharp.fluid} />
                  <LegendWrapper>
                    <h2>Somos mais de 1000 no nosso Discord!</h2>
                    <a href="https://bit.ly/cadastro-perifacode" target="blank">Inscreva-se</a>
                  </LegendWrapper>
              </div>
          </Carousel>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  padding-top: 72px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const LegendWrapper = styled.div`
  position: absolute;
  height: 200px;
  width: 800px;
  top: calc(50% - 100px);
  left: 80px;
  display: flex;
  align-items: justify-content;
  flex-direction: column;
  text-align: left;
  color: #fff;
  padding: 16px;


  h2 {
    font-weight: 600;
    font-size: 64px;
    line-height: 1.2;
    text-shadow: 0.05em 0.05em 0.1em black;
  }

  a {
    color: ${props => props.theme.color.white.regular};
    background-color: #F5490C;
    border-radius: 4px;
    padding: 16px;
    width: 200px;
    text-decoration: none;
    text-align: center;
    margin-top: 27px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
