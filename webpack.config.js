const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: {
    dev: path.join(__dirname, 'lib'),
    prod: path.join(__dirname, 'lib'),
  }
}

process.env.BABEL_ENV = process.env.npm_lifecycle_event

module.exports = {
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
};