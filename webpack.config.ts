import path from 'path';
import webpack from 'webpack';

type Mode = 'development' | 'production';

type ENV_VARS = {
  MODE: Mode
}

export default function(ENV: ENV_VARS): webpack.Configuration {
  const isDev = ENV.MODE === 'development';
  
  const config: webpack.Configuration = {
    mode: ENV.MODE ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? 'index.js' : '[name].[contenthash].js',
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
  
  return config;
}