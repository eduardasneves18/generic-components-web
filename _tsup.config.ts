const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts', // Entry file for your component library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'YesBankComponents', // You can change the name
    libraryTarget: 'umd',
    umdNamedDefine: true,
    clean: true,
  },
  externals: [
    nodeExternals(), // ignore node_modules
    {
      react: 'react',
      'react-dom': 'react-dom',
    },
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract and bundle CSS
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // This is your bundled CSS file
    }),
  ],
  devtool: 'source-map',
  mode: 'production', // Add this for production-ready output
};
