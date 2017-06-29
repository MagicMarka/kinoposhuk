var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
	entry: [
	  './src/js/main.js',
    './src/js/newMovies.js',
    './src/js/movies_in_theaters.js',
    './src/js/getMovie.js',
    './src/js/popularMovies.js',
    './src/js/genres.js'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { 
      	test: /\.js$/, 
      	exclude: /node_modules/,
      	loader: "babel-loader" 
      }
    ]
  },
	plugins: [ new HtmlWebpackPlugin({
        		  title: 'MovieFinder',
              template: 'src/index.html',
              filename: 'index.html'
        	 }),
	         new ExtractTextPlugin("styles.css") ]
}

