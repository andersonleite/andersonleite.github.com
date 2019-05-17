import PostStyle from "./styles/PostStyle";
import React, {Component} from 'react'
import Gist from "./Gist";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      content
      date
    }
  }
`;

class PostItem extends Component {
  render() {

    const id = this.props.id !== undefined ? this.props.id : 'cjvr7uy87motk0b356mk5ktzx';

    return (
      <Query
        query={SINGLE_POST_QUERY}
        variables={{id}}>
        {({data}) => {
          return (

            <PostStyle>
              <div dangerouslySetInnerHTML={{ __html: data.post.content }} ></div>
            </PostStyle>

        )
        }}
        </Query>
        )
        }


        }
        export default PostItem

