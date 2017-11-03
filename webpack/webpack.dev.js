const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function () {


	const config = {};

	config.devtool = 'eval-source-map';

	config.entry = {
		polyfills: './src/polyfills.ts',
		app: './src/main.ts'
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
			}
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
		})
	];

	config.resolve = {
		extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
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