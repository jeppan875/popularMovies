import React from 'react';
import { useQuery } from '@apollo/client';
import { POPULAR_MOVIES } from '../../gql/movie';

function Home() {
  const { data, loading, error } = useQuery(POPULAR_MOVIES, {
    variables: {
      page: 1
    }
  });
  console.log(data)
  console.log(error)
  return (
    <header style={{
      backgroundColor: '#2b5278',
      justifyContent: 'center',
      display: 'flex'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        maxWidth: '900px',
        flexGrow: 1
      }}>
        <p>
          Popular Movies
        </p>
        </div>
      </header>
  );
}

export default Home;