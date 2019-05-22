import LinksStyle from "./styles/LinksStyle";
import Link from 'next/link'

const Links = () => (
  <LinksStyle>
    <nav>
      <Link href="/"><li>Home</li></Link>
      <Link href="/blog"><li>Blog</li></Link>
      <li><a href="https://www.linkedin.com/in/leiteanderson/" target="_blank">Linkedin</a></li>
      <li><a href="http://www.twitter.com/anderson_leite" target="_blank">Twitter</a></li>
      <li><a href="https://github.com/andersonleite" target="_blank">Github</a></li>
    </nav>
  </LinksStyle>
)

export default Links
