网站：https://element.eleme.cn/#/zh-CN/component/installation

1.安装element-ui
    cnpm i element-ui -S
2.按需加载
    cnpm install babel-plugin-component -D
    修改.babelrc
    {
        "presets": [["es2015", { "modules": false }]],
        "plugins": [
            [
                "component",
                {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-chalk"
                }
            ]
        ]
    }
3.使用
    import { Button, Select, Option, Steps, Step } from 'element-ui'
    Vue.use(Button)
    copy复制