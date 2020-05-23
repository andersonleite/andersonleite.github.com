import styled from "styled-components";
import theme from "./colors";

const InfoStyle = styled.div`
    bottom: 0;
    position: fixed;
    margin-bottom: 120px;
    
    p {
      span {
        font-weight: bold;
        color: ${theme.white};
      }
    }
`

export default InfoStyle
