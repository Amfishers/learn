const path = require('path')
module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "main.js"
    }
}
console.log(__dirname)