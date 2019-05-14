import Layout from '../components/Layout.js'
import Link from 'next/link'
import PostStyle from "../components/styles/PostStyle";
import React from "react";

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
      <PostStyle>
        <ul>
          <li>
            <h2>UI development with Cycle | Refactoring the code (part 4)</h2>
            <p><small>03 january 2017</small></p>
          </li>
          <li>
            <h2>UI development with Cycle | Refactoring the code (part 4)</h2>
            <p><small>03 january 2017</small></p>
          </li>
          <li>
            <h2>UI development with Cycle | Refactoring the code (part 4)</h2>
            <p><small>03 january 2017</small></p>
          </li>
          <li>
            <h2>UI development with Cycle | Refactoring the code (part 4)</h2>
            <p><small>03 january 2017</small></p>
          </li>
        </ul>
      </PostStyle>
    </Layout>
  )
}
