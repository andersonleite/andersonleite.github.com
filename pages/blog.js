import Layout from '../components/Layout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="post01" title="Post 01" />
        <PostLink id="post02" title="Post 02" />
        <PostLink id="post03" title="Post 03" />
      </ul>
    </Layout>
  )
}
