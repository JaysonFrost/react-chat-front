import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import { queries as userQueries } from  './Users'

export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: () => ({
			...userQueries
		})
	})
})