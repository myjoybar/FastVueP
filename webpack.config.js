const path = require('path');
const CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
const BUILD_PATH = path.join(CURRENT_PATH, 'dist'); // 最后输出放置公共资源的目录,和上面一样
const {VueLoaderPlugin} = require('vue-loader');
const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const ExtractPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
    target: "web",
    // entry: path.join(__dirname, "src/index.js'"),
    entry: '/Users/joybar/Documents/WorkSpaces/WebStorm/FastVueP/src/index.js',
    output: {
        path: BUILD_PATH, // 设置输出目录
        filename: 'build.[hash:8].js',  // 输出的文件名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
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
    config.module.rules.push({
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    });
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

}else{
    // 生成坏境的配置
    config.entry = {   // 将所用到的类库单独打包
        app: "/Users/joybar/Documents/WorkSpaces/WebStorm/FastVueP/src/index.js",
        vendor: ['vue']
    };
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push({
        test: /\.((sa|sc|c)ss)|styl$/,
        use: [
             MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    });

    config.plugins.push(
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })

    );

    config.optimization = {
        splitChunks: {
            cacheGroups: {                  // 这里开始设置缓存的 chunks
                commons: {
                    chunks: 'initial',      // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    minSize: 0,             // 最小尺寸，默认0,
                    minChunks: 2,           // 最小 chunk ，默认1
                    maxInitialRequests: 5   // 最大初始化请求书，默认1
                },
                vendor: {
                    test: /node_modules/,   // 正则规则验证，如果符合就提取 chunk
                    chunks: 'initial',      // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    name: 'vendor',         // 要缓存的 分隔出来的 chunk 名称
                    priority: 10,           // 缓存组优先级
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    }


}

module.exports = config