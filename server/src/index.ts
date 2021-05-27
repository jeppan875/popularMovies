import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
require('dotenv').config()

const app: Application = express()
const port = 3013

app.use(cors())

app.use('/', async (req: Request, res: Response) => {
  const popularMoviesRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
  const popularMoviesStr = await popularMoviesRes.text()
  const popularMovies = JSON.parse(popularMoviesStr)
  res.status(200).send({ data: popularMovies })
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
