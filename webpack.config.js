const path = require('path');
const publicPathString = path.join(__dirname, 'public');
module.exports = {
    entry: './src/app.js',
    output: { 
        path: publicPathString,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test:  /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    // setting up dev server see package.json for more details.
    devServer: {
        contentBase: publicPathString
    }
};

