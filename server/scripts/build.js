process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const config = require('../webpack.config')

webpack(config).run((err, stats) => {
	if (err) {
		throw err
	}

	const str = stats.toString({
		colors: true
	})
	console.log(str)
})