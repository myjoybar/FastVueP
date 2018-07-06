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
   - npm i stylus-loader stylus


   
 - 3 配置项目的webpack(npm run dev 不会压缩，npm run build会压缩)
   - "build": "webpack --mode production --config webpack.config.js",
   - "dev": "webpack --mode development --config webpack.config.js"
   
 - 4 css预处理器
   
   