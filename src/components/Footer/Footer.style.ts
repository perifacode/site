import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.color.brand.black};
  color: ${({ theme }) => theme.color.brand.white};
  display: flex;
  align-items: center;
  height: 390px;

  .footer-wrapper {
    width: 100%;

    .contact {
      text-align:center;
    }
  }

  .logo {
    display: none;
  }

  .menu-footer {
    align-items: center;
    background: ${({ theme }) => theme.color.brand.yellow};
    bottom: 0;
    display: flex;
    height: 100%;
    height: 61px;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 1000;

    ul {
      align-items: center;
      background: ${({ theme }) => theme.color.brand.yellow};
      display: flex;
      flex-direction: column;
      height: calc(100% - 60px);
      justify-content: center;
      list-style: none;
      margin: 0;
      opacity: 0;
      padding: 0;
      left: 0;
      position: fixed;
      top: 100%;
      transition: all 0.5s ease-in-out;
      width: 100%;
      z-index: 990;

      &.open {
        opacity: 1;
        top: 0;
      }
    }

    li {
      position: relative;
      display: block;
      padding: ${({ theme }) => `${theme.spacing[1]}px`} 0;

      .anchor-link {
        font-family: ${({ theme }) => theme.typography.body.fontFace};
        font-size: ${({ theme }) => `${theme.typography.header.size[3]}px`};
        color: ${({ theme }) => theme.color.ui.text.dark.primary};
        font-weight: 600;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 240px;
    width: 100%;
    bottom: 0;
    
    .footer-wrapper {
      display: grid;
      grid-template-columns: [copyright] 3fr [contact] 1fr;
      margin: 0 100px;
      
      .logo {
        display: block;
        width: 180px;
      }

      .copyright {
        grid-column: copyright;
      }

      .contact {
        grid-column: contact;
      }
    }
    .menu-footer {
      display: none;
    }
  }
`
export default StyledFooter
