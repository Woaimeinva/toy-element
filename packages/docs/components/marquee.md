---
title: Marquee
description: Marquee 组件文档

next:
  link: /get-started
  text: 快速开始

prev:
  link: /components/alert
  text: Alert 提示
---

# Marquee 跑马灯

我去！原来我也要毕业了吗！

## 基础用法

Marquee 组件

::: preview
demo-preview=../demo/marquee/Basic.vue
:::

## 滚动方向

通过设置 `direction` 属性来改变跑马灯的滚动方向，默认方向为 `right`

::: preview
demo-preview=../demo/marquee/Direction.vue
:::

## 滚动速度

可以设置 Marquee 组件的滚动速度， `speed` 属性决定 Marquee 组件的滚动速度， 该属性接受一个 `number`，默认为 `1`。

::: preview
demo-preview=../demo/marquee/Speed.vue
:::



## Marquee API

### Props

| Name        | Description  | Type                                                 | Default |
| ----------- | ------------ | ---------------------------------------------------  | ------- |
| direction   | 滚动方向      | `string`                                             | right    |
| speed       | 滚动速度      | `number`                                             | 1       |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | 默认插槽，用于设置 Marquee 的内容     |      