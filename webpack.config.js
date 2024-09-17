const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // add the css files process config 
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
};