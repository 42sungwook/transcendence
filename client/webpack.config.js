const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@core': path.resolve(__dirname, './src/core/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@route': path.resolve(__dirname, './src/route/'),
      '@utils': path.resolve(__dirname, './src/utils/')
    }
  },
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    port: 9000
  }
}
