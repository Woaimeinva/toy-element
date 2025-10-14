<script setup lang="ts">
import type { CollapseItemProps } from './type';
import { inject, computed } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';
import ErIcon from '../Icon/Icon.vue';
import transitionEvents from './transitionEvents';

defineOptions({
    name: 'ErCollapseItem',
})

// 定义组件 props
const props = defineProps<CollapseItemProps>()

const ctx = inject(COLLAPSE_CTX_KEY)

const isActive = computed(() => ctx?.activeNames.value?.includes(props.name))

function handleClick() {
    if (props.disabled) {
        return;
    }
    ctx?.handleItemClick(props.name);
}


</script>
<template>
    <div class="er-collapse-item" :class="{
        'is-disabled': disabled,
    }">
        <div class="er-collapse-item__header" :id="`item-header-${name}`" :class="{
            'is-active': isActive,
            'is-disabled': disabled,
        }" @click="handleClick">
            <span class="er-collapse-item__title">
                <slot name="title">
                    {{ title }}
                </slot>
            </span>
            <er-icon icon="angle-right" class="header-angle"></er-icon>
        </div>
        <transition name="slide" v-on="transitionEvents">
            <div class="er-collapse-item__wapper" v-show="isActive">
                <div class="er-collapse-item__content" :id="`item-content-${name}`">
                    <slot></slot>
                </div>
            </div>
        </transition>

    </div>
</template>
<style scoped>
@import './style.css';
</style>