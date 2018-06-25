const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const BUILD_CONFIG = {
	entry: './src/index.jsx',

	plugins: [
		new CleanWebpackPlugin(['build'], {
			root: path.resolve(__dirname, '../'),
			verbose: true
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js/
		}),
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
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	}
};

module.exports = BUILD_CONFIG;
