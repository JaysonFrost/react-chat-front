const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const IS_PROD = process.env.NODE_ENV === 'production' && true

const postcssLoader = {
	loader: require.resolve('postcss-loader'),
	options: {
		config: { path: require.resolve('./postcss.config') }
	}
}

const config = {
	entry: path.resolve(__dirname, '../src/index.jsx'),
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: 'output.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.png'],
		alias: {
			images: path.resolve(__dirname, '../src/assets/images'),
			containers: path.resolve(__dirname, '../src/containers'),
			components: path.resolve(__dirname, '../src/components'),
			stylesheet: path.resolve(__dirname, '../src/assets/stylesheet'),
			fonts: path.resolve(__dirname, '../src/assets/fonts')
		}
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: ['babel-loader', 'eslint-loader']
		}, {
			test: /\.(css|sss)$/,
			use: IS_PROD
				? ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader?modules=true', postcssLoader]
				})
				:
				['style-loader',
					{ loader: 'css-loader', options: { modules: true, localIdentName: `${!IS_PROD ? '[local]_' : ''}[hash:base64:5]` } },
					postcssLoader
				]
					.filter(Boolean)
		}, {
			test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
			loader: require.resolve('url-loader'),
			options: {
				limit: 10000,
				name: `static/media/[name].${IS_PROD ? '[chunkhash].' : ''}[ext]`
			}
		}, {
			test: /\.(woff|woff2|eot|ttf|svg)$/,
			loader: 'file-loader?name=fonts/[name].[ext]'
		}]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	devServer: {
		contentBase: path.resolve(__dirname, '../public'),
		historyApiFallback: true,
		inline: true,
		open: true
	},
	devtool: IS_PROD ? 'source-map' : 'cheap-module-source-map'
}

module.exports = config

if (IS_PROD) {
	module.exports.plugins.push(
		new UglifyJsPlugin()
	)
}
