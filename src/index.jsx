import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import 'stylesheet/reset.css'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,

	document.getElementById('root')
)
