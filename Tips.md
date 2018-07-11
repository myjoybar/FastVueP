- 1 安装vue-cli & webpack-cli
   - sudo npm install vue-cli -g
   - sudo npm install webpack-cli -g
   
- 2 开始构建NPM项目-> package.json
   - npm init  
   - npm i webpack
   - npm i vue vue-loader
   - npm i css-loader
   - npm i vue-template-compiler
   - npm i style-loader
   - npm i url-loader file-loader

   
- 3 css预处理器
   - npm i stylus-loader stylus
    
- 5 webpack dev-server
   - npm i webpack-dev-server -g
   - npm i cross-env
    
- 5 配置项目的webpack(npm run dev 不会压缩，npm run build会压缩)
   - "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
   - "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js",
   - "build": "webpack --mode production --config webpack.config.js",
   - "dev": "webpack-dev-server  --mode development --config webpack.config.js"
 
- 6 生成html
   - npm i html-webpack-plugin
    
- 7 淘宝镜像   
   - npm install -g cnpm --registry=https://registry.npm.taobao.org
   - sudo cnpm install express
    
- 8 Vue 数据绑定，组件化框架  
   - 组件：html js，css
   - React 使用JSX处理书写html，动态render html
   - React 使用JSX 来替代常规的 JavaScript
   - JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。
   - Vue并不支持JSX,vue 文件写html，js，css很方便
   - Vue2.0 render方法：数据改变时重新渲染
 
- 9 Vue
   -传统通过js操作html
   - 双向数据绑定 
   - 组件化
   - .vue文件的开发使用
   - .vue2.0 虚拟dom
   - API
   - 生命周期
   - computed
   
- 10 npm install 初始化
 
- 11 开发-配置vue的jsx写法以及postcss
   - npm i postcss-loader autoprefixer babel-loader babel-core 
   - sudo npm i babel-preset-env babel-plugin-transform-vue-jsx
   - sudo npm i babel-helper-vue-jsx-merge-props
   - sudo npm i babel-plugin-syntax-jsx
   - autoprefixer 处理优化css
   - babel 支持jsx代码
   
- 12 webpack 配置优化
   - npm i extract-text-webpack-plugin （css 单独分离打包）
   - npm install extract-text-webpack-plugin@next （extract-text-webpack-plugin目前还没有webpack4版本）
   - npm install --save-dev mini-css-extract-plugin