process.env['NODE_CONFIG_DIR'] = __dirname + '/config/'
const fs = require('fs')
if (fs.existsSync('.env')) { 
    //Load .env if outside docker (.env is ignored in docker build)
    require('dotenv').config()
}
require('babel-register')
require('./src/server.js') 