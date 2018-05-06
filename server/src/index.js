import express from 'express'
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schemas'

const app = express()

app.get(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql'
	})
)

app.use([
	bodyParser.json(),
	graphqlExpress({
		schema
	})
])

app.listen(process.env.PORT)