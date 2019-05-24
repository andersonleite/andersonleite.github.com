import styled from "styled-components";
import theme from "../colors";

const PostStyle = styled.div`
  width: 70%;
  text-align: justify;
  
  h2 {
    color: ${theme.green};
    font-size: 16px;
    line-height: 20px;
    text-align: right;

  }
  h3 {
    font-size: 16px;
    //color: ${theme.white};
    margin-top: 30px;
    font-weight: bold;
  }
  p {
  font-size: 16px;
    small {
      margin-bottom: 80px;
      display: block;
      font-size: 16px;
      text-align: right;
    }
  }
  img {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
  iframe {
    position: relative;
    left: -10px;
  }
  .post-container{
    padding-left: 20px;
    border-left: 1px solid ${theme.white}
  }
`

export default PostStyle
