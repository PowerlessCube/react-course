const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: { 
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //loader -> transform it to babel.
    module: {
        // 3 properties to setup
        rules: [{
            loader: 'babel-loader', // loader of choice
            test:  /\.js$/, // what file do we want to run it on
            exclude: /node_modules/
        }]
    }
    // set up presets with the .babelrc
};

