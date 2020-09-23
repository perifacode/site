import styled from "styled-components"

const StyledAnchor = styled.span`
  .anchor-wrapper {
    position: relative;
    display: block;
    text-align: center;
    padding: ${({ theme }) => `${theme.spacing[1]}px`} 0;

    .anchor-link {
      color: ${({ theme }) => theme.color.ui.text.dark.primary};
      &:after {
        background-color: ${({ theme }) => theme.color.ui.text.light.primary};
        border-radius: 4px;
        bottom: 0;
        content: "";
        height: 4px;
        left: 0;
        position: absolute;
        transform-origin: bottom left;
        transform: scaleX(0);
        transition: transform 0.3s;
        width: 100%;
      }

      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }
  }
`

export default StyledAnchor
