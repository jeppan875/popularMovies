import { contentResolvers, movieSchema } from './Movie'

import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = mergeTypeDefs([movieSchema])
const resolvers = mergeResolvers([contentResolvers])

export default makeExecutableSchema({ typeDefs, resolvers })
