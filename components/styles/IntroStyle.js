import styled from "styled-components";
import theme from "../colors";

const IntroStyle = styled.div`
  color: ${theme.grey_light};
  margin-bottom: 25px;
  span {
    color: ${theme.green};
    padding-left: 1px;
    padding-right: 1px;
  }
  
  p {
    margin-top: 10px;
  }
`

export default IntroStyle
