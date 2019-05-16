import Layout from '../components/Layout.js'
import Link from 'next/link'
import PostStyle from "../components/styles/PostStyle";
import React from "react";
import Posts from "../components/Posts";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <h2>{props.title}</h2>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <PostStyle>
        <Posts />
        {/*<ul>*/}
          {/*<PostLink id="2017-01-03-ui-rx-cycle-part-IV" title="UI development with Cycle | Refactoring the code (part 4)" />*/}
          {/*<PostLink id="2017-01-03-ui-rx-cycle-part-IV" title="UI development with Cycle | Refactoring the code (part 4)" />*/}
          {/*<PostLink id="2017-01-03-ui-rx-cycle-part-IV" title="UI development with Cycle | Refactoring the code (part 4)" />*/}
        {/*</ul>*/}
      </PostStyle>
    </Layout>
  )
}
