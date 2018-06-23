const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_CONFIG = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://192.168.80.5:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],

	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		historyApiFallback: true,
		host: '192.168.80.5'
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
			}
		]
	}
};

module.exports = DEV_CONFIG;
