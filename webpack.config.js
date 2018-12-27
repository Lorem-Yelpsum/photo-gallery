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
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                    },
                  },
                ],
              }
        ]
    }
};