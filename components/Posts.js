import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_POSTS_QUERY}>
          {({data}) => {
            return <div>
              {data.posts.map(post =>
                <h2>{post.title}</h2>
              )}
              </div>
          }}
        </Query>
      </div>
    )
  }
}
