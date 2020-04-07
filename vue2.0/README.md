# vue2.0
> A Vue.js project
## Build Setup
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.为什么用框架：(Angular,React,Vue)
    很多业务逻辑移动到前端实现，Javascript文件会越来越多，处理也会变得更加复杂
2.为什么选择Vue：
    1.渐进式框架
    2.双向数据绑定
    3.不需要操作DOM，状态机，状态的改变，会引起试图的更新
    4.Vue不仅仅可以构建整个大型应用，还可以作为一个项目的某一个功能实现然后嵌入项目
    5.Vue环境构建非常方便：vue-cli指令
    6.Vue单文件组件：组件化开发
    7.社区非常强大，提供各种各样的插件供我们使用
3.模板语法
    Mustache：模板{{  }} -> 文本
    v-html：可以解析DOM
    v-bind：绑定
    {{ 表达式 }}：只能存放单行语句
4.条件渲染
    v-if,v-else,v-else-if：
    v-show：
    v-if与v-show的区别：
        v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
        因此，如果需要非常频繁地切换，则使用 v-show 较好；
        如果在运行时条件很少改变，则使用 v-if 较好。
5.列表渲染
    v-for
6.事件处理
    事件处理方法：
        methods
7.表单输入
    1.双向数据绑定
    v-model(.lazy:在“change”时而非“input”时更新   .trim:自动过滤首尾空白字符   .number)
8.Class与Style样式
    v-bind:class
9.计算属性
    对数据进行处理
    计算属性缓存 vs 方法
        计算属性是基于他们的依赖进行缓存的
10.组件
    1.创建组件
        HTML、Javascript、CSS