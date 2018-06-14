const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: {
    dev: path.join(__dirname, 'lib'),
    prod: path.join(__dirname, 'lib'),
  }
}

var ENV = process.env.NODE_ENV


// process.env.BABEL_ENV = process.env.npm_lifecycle_event

let config = {
  entry: './src/index.js',
  resolve: {
      modules: [PATHS.app, 'node_modules'],
      extensions: ['.js', '.jsx', '.json'],
    },
  output: {
    path: PATHS.build.prod,
    filename: "index.js",
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { targets: { browsers: ['last 2 versions'] }, modules: false }],
            ],
            plugins: [
              'transform-runtime',
              'transform-class-properties',
            ],
          },
        },
      },
    ],
  },
  plugins: []
}

if (ENV === 'production') {
  config.plugins.push(new UglifyJsPlugin())
  console.log('onProduction')
}

module.exports = config 