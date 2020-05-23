import styled from "styled-components";
import theme from "./colors";

const InfoStyle = styled.div`
    bottom: 0;
    position: fixed;
    margin-bottom: 50px;
    
    .line{
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 2px;
      background: ${theme.green};
      margin: 0 7px;
      margin-right: 6px;
      transition: all .3s;
    }
    
    span {
      font-weight: bold;
      color: ${theme.white};
    }
`

export default InfoStyle
