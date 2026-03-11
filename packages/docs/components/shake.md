---
title: Shake
description: Shake 组件文档

next:
  link: /get-started
  text: 快速开始

prev:
  link: /components/marquee
  text: Marquee 组件
---

# Shake 抖动

咚～～～咚～～～咚～～～

## 基础用法

移入马里奥来碰撞方块

::: preview
demo-preview=../demo/shake/Basic.vue
:::

## 按钮抖动

按钮点击时水平抖动

::: preview
demo-preview=../demo/shake/Button.vue
:::

## 自定义抖动

自定义抖动幅度、频率、方向和周期

::: preview
demo-preview=../demo/shake/Custom.vue
:::

## Shake API

### Props

| Name        | Description  | Type                                                 | Default |
| ----------- | ------------ | ---------------------------------------------------  | ------- |
| direction   | 抖动方向      | `string`                                             | row     |
| amplitude   | 抖动幅度      | `number`                                             | 3       |
| duration    | 抖动周期      | `number`                                             | 800     |
| frequency   | 抖动频率      | `number`                                             | 4       |
| active      | 是否激活抖动  | `boolean`                                            | false   |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | 默认插槽，用于设置抖动的内容        |