const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: "./index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/../wwwroot"
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			components: path.resolve(__dirname, 'src', 'Components/'),
			services: path.resolve(__dirname, 'src', 'Services/'),
			injection: path.resolve(__dirname, 'src', 'Injection/'),
      controls: path.resolve(__dirname, 'src', 'Controls/'),
			pages: path.resolve(__dirname, 'src', 'Pages/'),
			router: path.resolve(__dirname, 'src', 'Router/'),
		}
	},
	
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			
			{ test: /\.(scss|sass)$/, use: [
				{loader: MiniCssExtractPlugin.loader},
				{loader: 'css-loader', options: {minimize: true}},
				{loader: 'sass-loader'},]
			},
			
			{ test: /\.css/, use: [
					{loader: MiniCssExtractPlugin.loader},
					{loader: 'css-loader', options: {minimize: true}}]
			}
		],
	},
	
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true
		}),
		new CompressionPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new LiveReloadPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: false
		})
	],
	
	mode: "production",
};