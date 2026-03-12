---
title: Watermark
description: Watermark 组件文档

next:
  link: /components/alert
  text: Alert 组件

prev:
  link: /components/collapse
  text: Collapse 组件
---

# Watermark 水印

令人讨厌又喜欢的东西

## 基础用法

基础水印效果

::: preview
demo-preview=../demo/watermark/Basic.vue
:::

## 组合使用

多种参数组合使用

::: preview
demo-preview=../demo/watermark/Combination.vue
:::

## Watermark API

### Props

| Name        | Description  | Type                                                 | Default |
| ----------- | ------------ | ---------------------------------------------------  | ------- |
| text        | 水印文本内容 | `string`                                             | 'this is watermark' |
| fontFamily  | 字体家族     | `string`                                             | 'Arial, sans-serif' |
| fontSize    | 字体大小     | `string`                                             | '16px' |
| fontWeight  | 字体粗细     | `string`                                             | 'normal' |
| color       | 字体颜色     | `string`                                             | 'rgba(227, 90, 40, 0.3)' |
| xGap        | X轴间距      | `number`                                             | 100 |
| yGap        | Y轴间距      | `number`                                             | 100 |
| rotate      | 旋转角度     | `number`                                             | 0 |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| content | 内容插槽，用于设置需要加水印的内容 |