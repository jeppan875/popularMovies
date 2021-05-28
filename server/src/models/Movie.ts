import fetch from 'node-fetch'

export const movieSchema = `    
  type Movie {
    id: ID!
    poster_path: String
    adult: Boolean!
    overview: String!
    release_date: String!
    genre_ids: [Int]!
    original_title: String!
    original_language: String!
    title: String!
    backdrop_path: String
    popularity: Float!
    vote_count: Float!
    video: Boolean!
    vote_average: Float!
  }

  type popularMoviePage {
    nextPage: Int
    movies: [Movie]!
  }

  type Query {
    popularMovies(page: Int!): popularMoviePage!
  }
`

export const contentResolvers = {
  Query: {
    popularMovies: async (_: any, args: { page: number }) => {
      const { page } = args
      const popularMoviesRes = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=${page}`
      )
      const popularMoviesStr = await popularMoviesRes.text()
      const parsedPopularMovies = JSON.parse(popularMoviesStr)
      const popularMovies = parsedPopularMovies.results
      const nextPage = page === 5 ? null : page + 1
      return {
        movies: popularMovies,
        nextPage: nextPage
      }
    }
  }
}
