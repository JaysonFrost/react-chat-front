const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
	mode: process.env.NODE_ENV,
	externals: nodeExternals(),
	plugins: [
		new webpack.EnvironmentPlugin([
			'PORT',
			'PGPORT',
			'PGUSER',
			'PGPASSWORD',
			'PGDATABASE'	
		])
	],
	resolve: {
		modules: ['./src', 'node_modules'],
	}
}