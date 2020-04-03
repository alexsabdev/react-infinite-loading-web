const path = require('path');
const merge = require('webpack-merge');

const commonConfig = {
  entry: './src',
  output: {
    path: path.resolve('dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },
};

module.exports = [
  merge(commonConfig, {
    mode: 'production',
    output: {
      filename: 'index.min.js',
    },
  }),
  merge(commonConfig, {
    mode: 'development',
    output: {
      filename: 'index.js',
    },
  }),
];
