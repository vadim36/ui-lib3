const path = require('path');

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  }
}