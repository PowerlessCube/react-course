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
        },
        {
            // Code used to convert our scss to css files
            test: /\.scss$/,
            // loaders for our styles.
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: publicPathString
    }
};

