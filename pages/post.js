import Layout from '../components/Layout.js'
import React from "react";
import PostItem from "../components/Post";

const Post = props => (
  <Layout>
    <PostItem id={props.query.id} />
  </Layout>
)

export default Post;
