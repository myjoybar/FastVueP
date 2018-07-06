const path = require('path');
const CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
const BUILD_PATH = path.join(CURRENT_PATH, 'dist'); // 最后输出放置公共资源的目录,和上面一样
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    // entry: path.join(__dirname, "src/index.js'"),
    entry: '/Users/joybar/Documents/WorkSpaces/WebStorm/FastVueP/src/index.js',
    output: {
        path: BUILD_PATH, // 设置输出目录
        filename: 'bundle.js', // 输出文件名 bundle.js
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
            // , {
            //     test: /\.css$/,
            //     loader: 'css-loader'
            // }
            , {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new VueLoaderPlugin() // vue-loader 15.+ 版本需指定plugin
    ]
}