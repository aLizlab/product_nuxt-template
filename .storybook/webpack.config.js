const path = require('path')
const rootPath = path.resolve(__dirname, '../app/')

module.exports = {
  module: {
    rules: [
      {
        test: /\.story\.ts$/,
        loaders: [
          require.resolve('@storybook/source-loader'),
        ],
        enforce: 'pre',
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // options: {
            //   includePaths: ['node_modules'],
            // },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './../app/assets/scss/reset.scss'),
                path.resolve(__dirname, './../app/assets/scss/app.scss'),
                path.resolve(__dirname, './../app/assets/scss/grid.scss'),
                path.resolve(__dirname, './../app/assets/scss/common.scss'),
              ],
            }
          }
        ],
      },
      {
        test: /\.vue/,
        loader: 'vue-docgen-loader',
        enforce: 'post'
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      '~': path.dirname(path.resolve(__dirname)),
      '@': rootPath,
    },
  },
};
