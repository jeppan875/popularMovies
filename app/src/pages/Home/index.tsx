import React from 'react';
import { useQuery } from '@apollo/client';
import { POPULAR_MOVIES } from '../../gql/movie';
import Fetching from '../../components/Fetching';
import { IPopularMovies } from '../../interfaces';
import MovieCard from '../../components/MovieCard';

function Home() {
  const { data, loading, error } = useQuery<IPopularMovies>(POPULAR_MOVIES, {
    variables: {
      page: 1,
    },
  });
  console.log(data);
  console.log(error);
  return (
    <Fetching loading={loading} error={error}>
      <div
        style={{
          flexGrow: 1,
        }}>
        {data?.popularMovies.movies.map((m, index) => (
          <MovieCard movie={m} index={index} />
        ))}
      </div>
    </Fetching>
  );
}

export default Home;
