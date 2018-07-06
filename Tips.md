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
    - npm i webpack-dev-server
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
    - cnpm install express
   