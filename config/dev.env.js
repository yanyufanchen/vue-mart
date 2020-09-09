var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"', //添加
  API_ROOT: '"http://localhost:8080/"'
})