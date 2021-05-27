import express, { Application } from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import executableSchema from './models'
require('dotenv').config()

const app: Application = express()
const port = 3013

app.use(cors())

app.use('/gql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true
}))

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
