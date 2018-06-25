const path = require('path');

const DEV_CONFIG = require('./webpack/webpack.dev.config');
const DEV_SERVER_CONFIG = require('./webpack/webpack.dev.server.config');
const BUILD_CONFIG = require('./webpack/webpack.prod.config');

const WEBPACK_CONFIG = {
	context: __dirname,

	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
		// chunkFilename: '[name].chunk.js'
	},

	stats: {
		colors: true,
		reasons: true,
		chunks: true
	}
};

switch (process.env.NODE_ENV) {
	case 'development':
		Object.assign(WEBPACK_CONFIG, DEV_CONFIG);
		break;
	case 'dev_server':
		Object.assign(WEBPACK_CONFIG, DEV_SERVER_CONFIG);
		break;
	case 'production':
		Object.assign(WEBPACK_CONFIG, BUILD_CONFIG, {
			output: {
				path: path.join(__dirname, 'build'),
				filename: 'bundle.js',
				chunkFilename: '[name].chunk.js'
			}
		});
		break;
	default:
		return;
}

module.exports = WEBPACK_CONFIG;
