import Router from './Router';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3013/gql',
  headers: {},
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          popularMovies: {
            keyArgs: false,
            merge(existing = { movies: [] }, incoming) {
              return {
                ...incoming,
                movies: [...existing.movies, ...incoming.movies],
              };
            },
          },
        },
      },
    },
  }),
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
