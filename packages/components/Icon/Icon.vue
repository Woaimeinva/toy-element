<script setup lang="ts">
// 引入组件的props类型定义
import { type IconProps } from "./type";
// 引入FontAwesomeIcon组件
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// 引入omit方法，该方法能够去除对象中的指定属性，并返回一个新的对象
import { omit } from "lodash-es";
import { computed } from "vue";

// 定义组件名称，并设置inheritAttrs为false，避免将属性绑定到组件根元素上
defineOptions({
  name: "ErIcon",
  inheritAttrs: false,
});

// 定义组件的props
const props = defineProps<IconProps>();

// 通过loadsh的omit方法排除type和color属性，返回一个新的对象
const filterProps = computed(() => omit(props, ["type", "color"]));

const customStyles = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
  <i
    class="er-icon"
    :class="{ [`er-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
/* 引入样式 */
@import "./style.css";
</style>