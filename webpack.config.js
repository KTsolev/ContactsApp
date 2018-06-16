const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    watch: true,
    devServer: {
      compress: true,
      port: 9000,
      stats: 'errors-only',
      open: true,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [{
          test: /\.ts$/, loader: 'ts-loader',
        },
        {
          test: /\.js$/,
          include: /src/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        },
      ],
    },

    devtool: 'inline-source-map',
  };
