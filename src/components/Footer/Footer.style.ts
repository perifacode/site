import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.color.brand.yellow};
  bottom: 0;
  height: 61px;
  position: fixed;
  width: 100%;
  z-index: 1000;

  .menu-footer {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    &-list {
      align-items: center;
      background: ${({ theme }) => theme.color.brand.yellow};
      display: flex;
      height: calc(100% - 60px);
      justify-content: center;
      list-style: none;
      margin: 0;
      opacity: 0;
      padding: 0;
      position: fixed;
      top: 100%;
      transition: all 0.5s ease-in-out;
      width: 100%;
      z-index: 990;

      &.open {
        opacity: 1;
        left: 0;
        top: 0;
      }
    }

    &-item {
      position: relative;
      display: block;
      padding: ${({ theme }) => `${theme.spacing[1]}px`} 0;

      .anchor-link {
        font-family: ${({ theme }) => theme.typography.body.fontFace};
        font-size: ${({ theme }) => `${theme.typography.header.size[1]}px`};
        color: ${({ theme }) => theme.color.ui.text.dark.primary};
        font-weight: 600;
      }
    }
  }
`
export default StyledFooter
