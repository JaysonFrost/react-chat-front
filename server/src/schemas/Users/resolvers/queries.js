import {GraphQLNonNull, GraphQLList, GraphQLID} from 'graphql'
import joinMonster from 'join-monster'
import postgres from 'postgres'
import Users from '../schema'

export default {
	users: {
		type: Users,
		resolve: async (root, args, context, info) => {
			console.log(info)
			return joinMonster(
				info,
				context,
				sql => postgres.query(sql),
				{dialect: 'pg', sqlMinify: false}
			)
		}
	}
}