import Router from './Router';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3013/gql',
  headers: {},
});

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: httpLink,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
