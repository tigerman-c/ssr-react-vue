### introduction
自己搭建的react和vue的ssr项目。目前仅实现react。

### 实现思路
用vue或者react相关插件处理组件，将组件解析成两部分，一部分是字符串类型的html，一部分是js文件（存放逻辑）。页面加上生成的js文件，把页面通过接口发送给浏览器，浏览器一开始解析的就是整个页面。

技术栈：webpack + express + babel + react + vue

### 命令
#### react ssr
yarn dev:ssr-react
访问： http://localhost:8082/react

### webpack4和webpack5差别还是挺大的，原来参考的是4的配置，现在5执行不通。需要修复
