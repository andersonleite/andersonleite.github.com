import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from "next/link";
import PostStyle from "./styles/PostStyle";

const ALL_POSTS_QUERY = gql`
    query ALL_POSTS_QUERY {
      posts {
        id
        title
        content
        date
      }
    }
`;

const PostLink = props => (
  <li>
    <h2>
      <Link href={`/post?id=${props.id}`}>
        {props.title}
      </Link>
    </h2>
    <p><small>03 January 2017</small></p>
  </li>
)

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_POSTS_QUERY}>
          {({data}) => {
            return <ul>
              {data.posts.map(post =>
                <PostLink id={post.id} title={post.title} />
              )}
              </ul>
          }}
        </Query>
      </div>
    )
  }
}
