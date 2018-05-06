process.env.NODE_ENV = 'development'

const childProcess = require('child_process')
const webpack = require('webpack')
const config = require('../webpack.config')

let fork
webpack(config).watch({}, (err, stats) => {
	if (err) {
		throw err
	}

	if (fork) {
		fork.kill()
	}
	const str = stats.toString({
		colors: true
	})
	console.log(str)
	fork = childProcess.fork('./dist/main.js')
})