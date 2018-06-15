const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: "./index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/../wwwroot/js"
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			Components: path.resolve(__dirname, 'src', 'Components/'),
			Controllers: path.resolve(__dirname, 'src', 'Controllers/'),
      Controls: path.resolve(__dirname, 'src', 'Controls/')
		}
	},
	
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.sass$/, use: [
				{loader: 'style-loader'}, 
				{loader: 'css-loader', options: {minimize: true}},
				{loader: 'sass-loader'}]}
		],
	},
	
	plugins: [
		new LiveReloadPlugin()
	],
	
	mode: "production",
};