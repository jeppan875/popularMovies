import { gql } from '@apollo/client';

export const POPULAR_MOVIES = gql`
  query ($page: Int!) {
    popularMovies(page: $page) {
      nextPage
      movies {
        id
        poster_path
        adult
        overview
        release_date
        genre_ids
        original_title
        original_language
        title
        backdrop_path
        popularity
        vote_count
        video
        vote_average
      }
    }
  }
`;
