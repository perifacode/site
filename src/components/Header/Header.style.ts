import styled from "styled-components"

const StyledHeader = styled.header`
  height: 64px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;

  .logo {
    max-width: 127px;
    margin: 9px auto;
  }

  .menu {
    display: none;
  }
`
export default StyledHeader
