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

    // cjvr7uy87motk0b356mk5ktzx
    const id = this.props.id !== undefined ? this.props.id : 'cjvu2u1o0000e0723t065mew0';

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

