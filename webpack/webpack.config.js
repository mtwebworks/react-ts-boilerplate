const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (mode) => {
  const { env } = mode
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}