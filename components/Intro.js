import styled from 'styled-components'
import theme from "../components/colors"

const H1 = styled.h1`
  color: ${theme.white};
  
  span {
    color: ${theme.green};
  }
`

const P = styled.p`
  margin-top: 10px;
`

const Intro = () => (
  <div>
    <H1>Anderson<span>/</span>Leite</H1>
    <P>Hi! I’m a Web Developer
      currently working as a Senior
      Frontend Developer at Apple.
      Feel free to contact me and
      read my blog posts.</P>
  </div>
)

export default Intro
