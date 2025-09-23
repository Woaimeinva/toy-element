<script setup lang="ts">
import { ref, computed, inject } from 'vue';

import { throttle } from 'lodash-es';

import type { ButtonProps, ButtonInstance, ButtonEmits } from './type';

import { ErIcon } from '../Icon';

import { BUTTON_GROUP_CTX_KEY } from './constants'

defineOptions({
    name: 'ErButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
    useThrottle: true,
    throttleDuration: 500, // 节流时间，单位ms
})

const slots = defineSlots()

// 定义组件实例
const _ref = ref<HTMLButtonElement>()

const iconStyle = computed(() => ({
    marginRight: slots.default ? '6px' : '0px',
}))
const handleBtnClick = (e: MouseEvent) => {
    emits('click', e)
}
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)
const emits = defineEmits<ButtonEmits>()

// 暴露组件实例
defineExpose<ButtonInstance>({
    ref: _ref,
})

const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const size = computed(() => buttonGroupCtx?.size ?? props.size)
const type = computed(() => buttonGroupCtx?.type ?? props.type)
const disabled = computed(() => {
    return props.disabled || buttonGroupCtx?.disabled || false
})
</script>
<template>
    <component ref="_ref" :is="tag" :disabled="disabled || loading" :type="tag === 'button' ? nativeType : void 0"
        :autofocus="autofocus" class="er-button" :class="{
            [`er-button--${type}`]: type,
            [`er-button--${size}`]: size,
            'er-button-circle': circle,
            'er-button-round': round,
            'er-button-plain': plain,
        }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
        <template v-if="loading">
            <slot name="loading">
                <er-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x"
                    spin></er-icon>
            </slot>
        </template>
        <er-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x"></er-icon>
        <slot></slot>
    </component>
</template>
<style>
@import './style.css'
</style>