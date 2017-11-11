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

/* 
Terminal output definitions:

Hash: 16bae5e627a63ed7f971 -> integrity of the output
Version: webpack 3.1.0
Time: 280ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.51 kB       0  [emitted]  main --> output
   [0] ./src/app.js 33 bytes {0} [built] --> input
✨  Done in 3.16s.
*/

// with webpack setup in this way we no longer need the scripts app.js file. and chaning index.html script to take our bundle.