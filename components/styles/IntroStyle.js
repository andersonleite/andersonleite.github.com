import styled from "styled-components";
import theme from "../colors";

const IntroStyle = styled.div`
  color: ${theme.grey_light};
  margin-bottom: 25px;
  
  h1 {
    font-weight: bold;
    font-size: 24px;
    color: ${theme.white};
    line-height: 0px;
    font-family: 'circular_std';
  }
  span {
    color: ${theme.green};
    padding-left: 1px;
    padding-right: 1px;
  }
  
  p {
    margin-top: 10px;
    margin-top: 30px;
    line-height: 20px;
  }
`

export default IntroStyle
