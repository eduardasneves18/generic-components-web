const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: './src/index.ts', // TypeScript entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'GenericComponentsWeb',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    clean: true,
  },
  externals: [
      nodeExternals(),
      {
        react: 'react',
        'react-dom': 'react-dom',

      },// Exclude external dependencies 
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript and TSX rules
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,  // Process CSS files
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: false, // ✅ Disable CSS Modules
            },
          },],  // Inject CSS into JS bundle
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'], //Resolve files TS
  },
  devtool: 'source-map',  // for depuration
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',  // Nome do arquivo CSS final
    }),
  ],
};
