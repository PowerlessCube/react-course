const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: { 
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test:  /\.js$/,
            exclude: /node_modules/
        }]
    },
    // Set up Source mapping for easier debugging. https://webpack.js.org
    devtool: 'cheap-module-eval-source-map'
};

