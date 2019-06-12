import styled from "styled-components";
import theme from "../colors";

const SidenavStyle = styled.div`
  height: 100%;
  width: 22%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${theme.grey_dark};
  overflow-x: hidden;
  padding: 70px 50px;
  opacity: 1;
  transition: opacity .3s ease-out;
  border-right: 1px solid rgb(37, 37, 37)
  }
`

export default SidenavStyle
