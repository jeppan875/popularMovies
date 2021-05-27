import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

// Boot express
const app: Application = express()
const port = 3013

app.use(cors())

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello world' })
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
