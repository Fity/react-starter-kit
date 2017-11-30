var path = require("path");
var webpack = require("webpack");
module.exports = {
		name: "vendor",
		entry: ["./vendor", "./vendor2", "react", "react-dom"],
		output: {
			path: path.resolve(__dirname, "js"),
			filename: "vendor.js",
			library: "vendor_[hash]"
		},
		plugins: [
			new webpack.DllPlugin({
				name: "vendor_[hash]",
				path: path.resolve(__dirname, "js/manifest.json")
			})
		]
	}
