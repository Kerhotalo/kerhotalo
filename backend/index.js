process.env['NODE_CONFIG_DIR'] = __dirname + '/config/'
require('babel-register')
require('./src/server.js') 