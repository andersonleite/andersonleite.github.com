import styled from "styled-components";
import theme from "../colors";

const PostStyle = styled.div`
  width: 90%;
  text-align: justify;
  
  h2 {
    color: ${theme.green};
    font-size: 26px;
  }
  h3 {
    font-size: 20px;
    color: ${theme.white};
    margin-top: 20px;    
  }
  p {
  font-size: 16px;
    small {
      padding-bottom: 10px;
    }
  }
`

export default PostStyle
