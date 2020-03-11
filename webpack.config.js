const HtmlWebpackPlugin = require('html-webpack-plugin');

/**@type {import('webpack').Configuration} */
const config = {
  devtool: 'source-map',
  entry: './src/js/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        // make all files ending in .json5 use the `json5-loader`
        test: /\.json5$/,
        use: 'json5-loader',
        type: 'javascript/auto',
      },
    ],
  },
};
module.exports = config;
