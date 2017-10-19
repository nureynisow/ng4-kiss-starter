const env = process.env.NODE_ENV || 'development';

switch (env){
    case 'development':
    case 'production':
    default:
        module.exports = require('./webpack/webpack.dev');
        break;
}