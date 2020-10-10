import styled from "styled-components"

const StyledHamburger = styled.div`
  height: 24px;
  width: 28px;
  position: relative;
  cursor: pointer;

  .button-hamburger,
  .button-hamburger::after,
  .button-hamburger::before {
    background: ${props => props.theme.color.brand.black};
    border-radius: 4px;
    border: none;
    height: 4px;
    position: absolute;
    transition: ease 0.15s transform;
    width: 28px;
  }

  .button-hamburger {
    top: calc(50% - 2px);

    &::before {
      transition: bottom 0.08s ease-out 0s, top 0.08s ease-out 0s,
        opacity 0s linear;
      top: -10px;
    }

    &::after {
      transition: bottom 0.08s ease-out 0s, top 0.08s ease-out 0s,
        opacity 0s linear;
      bottom: -10px;
      display: block;
      content: " ";
    }

    &::after,
    &::before {
      display: block;
      content: " ";
      left: 0;
    }
  }

  &.opened {
    .button-hamburger {
      &::before {
        top: 0;
      }

      &::after,
      &::before {
        transition: bottom 0.08s ease-out, top 0.08s ease-out,
          opacity 0s linear 0.08s;
        opacity: 0;
      }

      &::after {
        bottom: 0;
      }
    }
  }
`
export default StyledHamburger
