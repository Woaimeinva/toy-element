<script setup lang="ts">
import type { ButtonGroupProps } from './type';
import { toRef, provide, reactive } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';
// 定义组件
defineOptions({
    name: "ErButtonGroup"
})

// 获取props
const props = defineProps<ButtonGroupProps>()

// 提供上下文
provide(BUTTON_GROUP_CTX_KEY, reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
}))

</script>
<template>
    <div class="er-button-group">
        <slot></slot>
    </div>
</template>
<style scoped>
@import './style.css';
</style>