const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "./src"), "node_modules"
        ]
    },
};