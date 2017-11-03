const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = function () {


	const config = {};

	config.devtool = 'eval-source-map';

	config.entry = {
		polyfills: './src/polyfills.ts',
		vendor: './src/vendor.ts',
		app: './src/main.ts',
		css: './src/app/app.module.scss'
	};

	config.output = {
		path: root('../dist'),
		publicPath: '/',
		filename: 'js/[name].js',
		chunkFilename: '[id].chunk.js'
	};

	config.module = {
		rules: [
			{
				test: /\.html$/,
				exclude: [root('src/index.html')],
				loader: 'raw-loader'
			},
			{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader'
			},
			{
				test: /\.ts$/,
				use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				exclude: /app\.module\.scss$/,
				use: ['raw-loader', 'sass-loader']
			},
			{
				test: /app\.module\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg|otf|woff|woff2|ttf|eot|ico)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{loader: 'file-loader?name=fonts/[name].[hash].[ext]?'}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{loader: 'file-loader?name=img/[name].[hash].[ext]?'}
				]
			},
		]
	};

	config.plugins = [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body',
			chunksSortMode: 'dependency'
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			root('./src')
		),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['polyfills']
			// TODO name: ['app','vendor','polyfills']
		}),
		new ExtractTextPlugin({
			filename: "styles.css",
			disable: false,
			allChunks: true
		})
	];

	config.resolve = {
		extensions: ['.ts', '.js', '.json', '.scss', '.html']
	};

	config.devServer = {
		port: 9191,
		historyApiFallback: true,
		open: true,
		proxy: {
			"/api": {
				target: "http://localhost:8080",
				pathRewrite: {"^/api": ""}
			}
		}
	};

	return config;
};

// Helper functions
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}