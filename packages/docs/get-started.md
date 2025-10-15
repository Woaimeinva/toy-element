---
search: false
next:
  link: /components/button
  text: Button 按钮
---
# 基于Vue3模仿Element-Plus的组件库

## 安装


```bash
npm i @toy-element-yasina --save
```

## 开始使用

**全局使用**


```js
// 引入所有组件
import ToyElement from 'toy-element-yasina'
// 引入样式
import 'toy-element-yasina/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(ToyElement).mount('#app')
```

```vue
<template>
  <er-button>我是 Button</er-button>
</template>
```

**单个导入**

Yasina-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <er-button>我是 Button</er-button>
</template>
<script>
  import { ErButton } from 'toy-element-yasina'
  export default {
    components: { ErButton },
  }
</script>
```
