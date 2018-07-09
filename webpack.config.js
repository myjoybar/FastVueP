const path = require('path');
const CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
const BUILD_PATH = path.join(CURRENT_PATH, 'dist'); // 最后输出放置公共资源的目录,和上面一样
const {VueLoaderPlugin} = require('vue-loader');
const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = {
    target: "web",
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
            },
            {
                test: /\.jsx/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }

                    },
                    'stylus-loader'
                ]
            },
            {
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
        new VueLoaderPlugin(), // vue-loader 15.+ 版本需指定plugin
        new webpack.DefinePlugin(
            {
                'process.env': {
                    NODE_ENV: isDev ? '"development"' : '"production"'
                }
            }
        ),//给webpack 在编译时和html中可以引用
        new HTMLPlugin()//html
    ]
}
if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'//代码调试,webpack 官方推荐
    config.devSerer = {
        port: '8000',
        host: '0.0.0.0',
        overlay: {
            error: true
        },
        historyFallback: {},
        hot: true,//只refresh render组件
        // open:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitonerrorsPlugin()
    )

}
module.exports = config