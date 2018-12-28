const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const bundleDir = path.join(__dirname, '/client/dist');

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: bundleDir
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: [path.resolve(SRC_DIR)],
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                include: `${SRC_DIR}/components`,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                      modules: true,
                      localIdentName: '[local]__[hash:base64:5]'
                    }
                  }
                ]
              }
        ]
    }
};