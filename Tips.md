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
   
- 13 webpack 区分打包类库代码
   - 框架代码稳定性高，业务代码经常变。
   
- 14 总结
   - 1 现在的前端开发都会用webpack体系
       - 写的代码80%都是js代码，html，css 都是包含在js里面 
       - webpack强大的loader和plugin体系，帮助文件打包合并压缩，静态资源+hash后缀来提供浏览器长缓存，并且合理的更新浏览器长缓存
   - 2 现在的前端开发基本离不开webpack：学习vue，不仅仅是学习vue的API，更是学习整个生态环境，你要学习vue-router，要学习vue的组件开发，学习如何配置vue配置webpack的流程，然后把这个项目跑起来。
   - 3. 理解vue的重点不是它的api和指令，而是整个渲染的过程：
       - 1. 学习JSX能够更好的理解vue
       - 2. jsx有一个render方法，每次调用render方法，才能得到我们真正想要的结果，vue的template部分，最终也是用vue-loader去解析成一个render方法，然后放到对象里面去，每次vue里面有数据更新，它都会去重新调用render方法，生成一个新的html结构，最终插入到dom里面，再显示出来。
   - 4. 眼界一定要放开，要广泛学习前端各种知识，完善知识体系。
   
   