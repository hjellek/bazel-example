const path = require("path");

module.exports = (_env, options) => {
    return {
        entry: {
            index: path.resolve(__dirname, "out/src/index.jsx"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js"
        },
        module: {
            rules: [

            ]
        }
    };
};
