module.exports = {
	entry: "./index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/../wwwroot/js"
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	
	mode: "development",
	
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};