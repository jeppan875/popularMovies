import React from 'react';
import { useQuery } from '@apollo/client';
import { POPULAR_MOVIES } from '../../gql/movie';
import LoadingIndicator from '../../components/LoadingIndicator'

function Home() {
  const { data, loading, error } = useQuery(POPULAR_MOVIES, {
    variables: {
      page: 1
    }
  });
  console.log(data)
  console.log(error)
  return (
    <div style={{
      flexGrow: 1
    }}>
        <p>
        hommmeeeeeeeeeee
        </p>
      <LoadingIndicator />
    </div>
  );
}

export default Home;