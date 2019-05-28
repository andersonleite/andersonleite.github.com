import styled from "styled-components";

const MainStyle = styled.div`
  margin-left: 20%; /* Same as the width of the sidenav */
  padding: 100px 10px;
  
  &:hover + #sidenav { background-color: yellow; }
`

export default MainStyle
