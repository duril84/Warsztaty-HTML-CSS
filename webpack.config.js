module.exports = {
    entry: ["./js/app.js", "./scss/main.scss"],
    output: {
        filename: "out.js",
    },
    watch: true,
    mode: "development",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.(jpg|jpeg|gif|png|csv)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: 'images',
                    outputPath: 'images'
                }
            }
        }, {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: 'fonts',
                    outputPath: 'fonts'
                }
            }
        }]
    },

};