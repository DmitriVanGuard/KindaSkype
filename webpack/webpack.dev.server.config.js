const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_SERVER_CONFIG = {
	// entry: './src/index.jsx',
	entry: [
		'webpack-dev-server/client?http://192.168.80.5:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],

	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		historyApiFallback: true,
		host: '192.168.80.5'
		// proxy: {
		// 	'/': {
		// 		target: 'http://localhost:3000'
		// 	}
		// }
	},

	plugins: [
		new CleanWebpackPlugin(['/dist']),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
};

module.exports = DEV_SERVER_CONFIG;
