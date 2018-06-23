const path = require('path');

const DEV_CONFIG = require('./webpack/webpack.dev.config');

const WEBPACK_CONFIG = {
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
		reasons: true
		// chunks: true
	}
};

switch (process.env.NODE_ENV) {
	case 'development':
		Object.assign(WEBPACK_CONFIG, DEV_CONFIG);
		break;
}

module.exports = WEBPACK_CONFIG;
