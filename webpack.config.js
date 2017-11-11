// Entry point - where does out application kick off
// Google webpack.js.org for documentation.
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: { // 2 things, path and file name
        //absolute path to the file
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'

    }
}
// output - where do we put the bundle.