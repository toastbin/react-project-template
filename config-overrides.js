const path = require('path')
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true
  }),
  addWebpackAlias({
    '@pages': path.resolve(__dirname, './src/pages'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@components': path.resolve(__dirname, './src/components'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@routes': path.resolve(__dirname, './src/routes'),
    '@apis': path.resolve(__dirname, 'src/apis'),
    '@settings': path.resolve(__dirname, './src/settings'),
    '@store': path.resolve(__dirname, './src/store'),
    '@models': path.resolve(__dirname, './src/models')
  })
);

