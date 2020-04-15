const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'uswds.min.js';
module.exports = config;
