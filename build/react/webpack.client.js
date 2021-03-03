const path = require('path');

const serverConfig = {
	mode: 'development',
	entry: '../../src/react/client.js',
	output: {
		filename: 'react.index.js',
		path: path.resolve(__dirname, '../../public')
	},
	module: {
		rules: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: ['@babel/react', ['@babel/preset-env', {
					targets: {
						browsers: ['last 2 versions']
					}
				}]]
			}
		},
        {
			test: /\.css?$/,
			use: ['style-loader', {
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					modules: true,
					localIdentName: '[name]_[local]_[hash:base64:5]'
				}
			}]
		},{
			test: /\.(png|jpeg|jpg|gif|svg)?$/,
			loader: 'url-loader',
			options: {
				limit: 8000,
				publicPath: '/'
			}
		}]
	}
};

module.exports = serverConfig