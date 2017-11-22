const env = process.env.NODE_ENV || 'development';

switch (env) {
	case 'development':
	case 'integration':
		module.exports = require('./webpack/webpack.dev');
		break;
	case 'validation':
	case 'preproduction':
	case 'production':
	default:
		module.exports = require('./webpack/webpack.prod');
		break;
}