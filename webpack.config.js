const path = require('path');

const nodeExternals = require('webpack-node-externals');

const serverConfig = {
	target: 'node',
	mode: 'development',
	entry: './src/ssrServer.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	externals: [nodeExternals()],
	module: {
		rules: [{
			test: /\.jsx?$/,
            exclude: /node_modules/, 
			use: {
				loader: 'babel-loader',
				options: {
                    presets: ['@babel/preset-env', '@babel/react']  // loader的可选配置。
                }
			}
		}]
	}
};

module.exports = serverConfig