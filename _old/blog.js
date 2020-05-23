import Layout from '../components/Layout.js'
import Link from 'next/link'
import PostStyle from "../components/styles/PostStyle";
import React from "react";
import Posts from "./Posts";

export default function Blog() {
  return (
    <Layout>
      <PostStyle>
        <Posts />
      </PostStyle>
    </Layout>
  )
}
