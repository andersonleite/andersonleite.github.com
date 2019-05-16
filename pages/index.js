import Layout from "../components/Layout";
import Post from "../components/Post";
import { ApolloProvider } from 'react-apollo';

const Index = () => (
  <div>
    <Layout >
      <Post />
    </Layout>
  </div>
)

export default Index
