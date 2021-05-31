import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { POPULAR_MOVIES } from '../../gql/movie';
import Fetching from '../../components/Fetching';
import { IPopularMovies } from '../../interfaces';
import MovieCard from '../../components/MovieCard';
import PrimaryButton from '../../components/PrimaryButton';

function Home() {
  const [initialFetch, setinitialFetch] = useState(true);
  const [fetchMoreLoading, setFetchmoreLoading] = useState(false);
  const { data, loading, error, fetchMore } = useQuery<IPopularMovies>(
    POPULAR_MOVIES,
    {
      skip: initialFetch,
      variables: {
        page: 1,
      },
    },
  );

  return (
    <Fetching loading={loading} error={error}>
      <div
        style={{
          flexGrow: 1,
        }}>
        {data?.popularMovies.movies.map((m, index) => (
          <MovieCard key={m.id} movie={m} index={index} />
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px',
            marginBottom: '40px',
          }}>
          <PrimaryButton
            loading={fetchMoreLoading}
            text={initialFetch ? 'Fetch Popular Movies' : 'Fetch more movies'}
            onClick={() => {
              if (initialFetch) {
                setinitialFetch(false);
              } else {
                setFetchmoreLoading(true);
                fetchMore({
                  query: POPULAR_MOVIES,
                  variables: {
                    page: data?.popularMovies.nextPage,
                  },
                }).then(() => {
                  setFetchmoreLoading(false);
                });
              }
            }}
          />
        </div>
      </div>
    </Fetching>
  );
}

export default Home;
