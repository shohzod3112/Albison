const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // mode -> Qaysi modeda ishlayotgani
    mode: 'production', // development
    // entry -> index.html faylga ulangan asosiy .js fayl qaysiligi ko'rsatiladi. 
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js'),
        about: path.resolve(__dirname, 'src/js/about.js')
    },
    // output -> Yaratilgan .js fayl qayyerga va qanaqa nom bilan saqlanishi ko'rsatiladi.
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    // plugin -> public papka ichida har bir .html faylni o'ziga tegishli bo'lgan .js faylini ulash uchun ishlatiladi
    plugins: [
        new HtmlWebpackPlugin({
            title: "Countries | Home",
            template: './src/indexTemp.html',
            filename: 'index.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            title: "Countries | About",
            template: './src/pages/aboutTemp.html',
            filename: 'about.html',
            chunks: ['about']
        }),

        new MiniCssExtractPlugin()
    ],
    // Loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
        ]
    },

    // devServer
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 3001,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
}