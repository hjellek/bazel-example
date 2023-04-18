const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, options) => {
    return {
        entry: {
            index: path.resolve(__dirname, "src/index.tsx"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js"
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.([tj])sx?$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            rootMode: "upward",
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        })],
        devServer: {
            port: 3000
        }
    };
};
