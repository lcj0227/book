#记一次webpack4升级
大多数问题和版本之间的兼容有关系，需要升级，babel统一升级@babel7.0.0

```
babel-preset-react
babel-preset-es2015
babel-preset-stage-1
babel-plugin-transform-decorators-legacy
babel-plugin-transform-runtime
babel-core
babel-loader
升级为
 "@babel/core": "^7.2.0",
 "@babel/plugin-proposal-class-properties": "^7.2.1",
 "@babel/plugin-proposal-decorators": "^7.2.0",
 "@babel/plugin-transform-runtime": "^7.2.0",
 "@babel/preset-env": "^7.2.0",
 "@babel/preset-stage-1": "^7.0.0",
 "@babel/preset-react": "^7.0.0",
 "@babel/runtime": "^7.2.0"
```

* 1、autopefixer  

看了很多文档要在根目录下配置postcss.config.js，配置完，不生效。

下面这种配置更简单：
```javascript
{loader: 'postcss-loader',options:{plugins:[require("autoprefixer")("last 100 versions")]}}
```
* 2、文件修改导致编译失败服务断掉---ts版本不兼容 调整版本

* 3、html用到ejs模板，会报模板中的变量is not defined   需要获取到变量  待解决兼容办法  

  后面先接入lion

* 4、报错

  1、HotModuleReplacementPlugin        未安装 webpack-dev-server

![image-20181213154408141](/Users/liuchunjie/Library/Application Support/typora-user-images/image-20181213154408141.png)
 2、OccurrenceOrderPlugin  

![image-20181213155920694](/Users/liuchunjie/Library/Application Support/typora-user-images/image-20181213155920694.png)

3、DefinePlugin![image-20181213160929657](/Users/liuchunjie/Library/Application Support/typora-user-images/image-20181213160929657.png)

4、NodeTemplatePlugin

![image-20181213163534074](/Users/liuchunjie/Library/Application Support/typora-user-images/image-20181213163534074.png)

5、版本兼容问题  npm install extract-text-webpack-plugin@next 

![image-20181213170514311](/Users/liuchunjie/Library/Application Support/typora-user-images/image-20181213170514311.png)

6、typescript版本与awesome-typescript-loader版本不兼容    

```
awesome-typescript-loader@5.2.1    
typescript@2.8.4
```

![image-20181214151943146](/Users/liuchunjie/Library/Application Support/typora-user-images/image-20181214151943146.png)



* 最后--完整的配置
```javascript

```



