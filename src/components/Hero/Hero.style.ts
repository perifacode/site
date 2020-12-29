import styled from "styled-components"

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.color.brand.black};
  padding: 0;

  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .hero-text h1 {
    font-family: ${({ theme }) => theme.typography.header.fontFace};
    font-size: ${({ theme }) => `${theme.typography.header.size[1]}px`};
    font-weight: ${({ theme }) => theme.typography.header.weight};
    color: ${({ theme }) => theme.color.brand.white};
    text-shadow: 0.1em 0.1em 0.2em ${({ theme }) => theme.color.brand.black},
    -2px -2px white, 2px 2px ${({ theme }) => theme.color.brand.black};
    max-width: 300px;
  }

  .hero-text a {
    background: ${({ theme }) => theme.color.brand.yellow};
    border-radius: ${({ theme }) => `${theme.border[1]}px`};

    width: 175px;
    height: 40px;
    padding: 10px 32px;

    color: ${({ theme }) => theme.color.brand.black};
    font-size: ${({ theme }) =>
      `${theme.typography.link.variant[1].size[0]}px`};
    font-weight: ${({ theme }) => theme.typography.link.variant[1].weight};
  }
  .slider {
    min-height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: unset;
    align-items: center;
    text-align: left;

    .hero-image {
      justify-content: flex-start;
      padding-left: 100px;
      height: 600px;
    }

    .hero-text h1 {
      font-size: ${({ theme }) => `${theme.typography.header.size[0]}px`};
      max-width: 700px;
    }

    .hero-text a {
      font-size: ${({ theme }) =>
        `${theme.typography.link.variant[1].size[1]}px`};
    }
  }
`

export default StyledHero
