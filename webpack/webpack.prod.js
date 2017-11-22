const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;


module.exports = function () {

	console.log("===========================================================");
	console.log("           Building for production environment");
	console.log("===========================================================");

	const config = {};

	config.entry = {
		polyfills: './src/polyfills.ts',
		vendor: './src/vendor.ts',
		app: './src/main.ts',
		css: './src/app/app.module.scss'
	};

	config.output = {
		path: root('../dist'),
		publicPath: '/',
		filename: 'js/[name].[hash].js',
		chunkFilename: '[name].[hash].chunk.js'
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
				loader: 'raw-loader',
				test: /\.(css)$/
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
		new ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)/,
			root('./src')
		),
		new LoaderOptionsPlugin({
			debug: false
		}),
		new CommonsChunkPlugin({
			name: ['polyfills', 'vendor']
		}),
		new CopyWebpackPlugin([
			{context: 'src/app', from: "**/*.+(png|jpeg|jpg|gif|ico|svg|csv)"}
		]),
		new CopyWebpackPlugin([
			{context: 'src/app', from: "commons/translations", to: "translations"}
		]),
		new ExtractTextPlugin({
			filename: "styles.css",
			disable: false,
			allChunks: true
		}),
		new UglifyJsPlugin({
			comments: false,
			sourceMap: false,
			parallel: 4
		}),
		new ImageMinPlugin(),
		//ignore moment locales
		new IgnorePlugin(/^\.\/locale$/, /moment$/),
		//prevent from importing lodash global module
		new IgnorePlugin(/^lodash$/),
		//prevent from importing rxjs global module
		new IgnorePlugin(/^rxjs$/)
	];

	config.resolve = {
		extensions: ['.ts', '.js', '.json', '.scss', '.html']
	};

	return config;
};

// Helper functions
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}