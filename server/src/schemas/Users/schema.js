import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
	name: 'Users',
	sqlTable: 'users',
	uniqueKey: 'id',
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		description: {
			type: new GraphQLNonNull(GraphQLString)
		},
		nickname: {
			type: new GraphQLNonNull(GraphQLString)
		},
		regDate: {
			type: new GraphQLNonNull(GraphQLString)
		}
	})
})