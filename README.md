# vueapp-example
vue webpack 简单例子

> webpack + .vue 简单实例

## 知识点
- 使用es6语法编码
- 使用vue2.0
- 使用babel-polyfill转换新的API（Promise、Proxy、Maps、Set等）
- 使用loader编译.vue文件

## 安装
npm install
## 编译
npm run build
## 启用dev服务
npm run dev

## 注意
vue2区分**独立构建**、**运行时构建**，在webpack配置需要在resolve中增加([官方链接](https://vuefe.cn/v2/guide/installation.html#独立构建-vs-运行时构建))：

```javascript
resolve: {
  alias: {
    'vue$': '../node_modules/vue/dist/vue.common.js'
  }
}
```
