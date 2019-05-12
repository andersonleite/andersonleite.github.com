import styled from "styled-components";
import theme from "../colors";

const PostStyle = styled.div`
  width: 70%;
  text-align: justify;
  
  h2 {
    color: ${theme.green};
    font-size: 26px;
    line-height: 20px;
  }
  h3 {
    font-size: 18px;
    color: ${theme.white};
    margin-top: 30px;    
  }
  p {
  font-size: 16px;
    small {
      margin-bottom: 50px;
      display: block;
    }
  }
  img {
  margin-top: 20px;
  margin-bottom: 20px;
  }
  iframe {
    position: relative;
    left: -10px;
  }
`

export default PostStyle
