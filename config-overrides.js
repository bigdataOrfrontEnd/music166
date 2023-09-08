const {
  addWebpackAlias,
  override,
  addLessLoader,
  adjustStyleLoaders
} = require('customize-cra')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': resolve('./src')
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#13c2c2' }
      }
    }),
    // less配置
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options
      postcss.options = { postcssOptions }
    })
  )
}
