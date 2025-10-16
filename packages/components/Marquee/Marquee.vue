<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { type MarqueeProps } from './type';

defineOptions({
    name: 'ErMarquee',
    inheritAttrs: false
})

const props = withDefaults(defineProps<MarqueeProps>(), {
    speed: 1,
    direction: 'right'
})

const marqueeContent = ref()
const marquee = ref()

let position = 0
let animationId: any = null

const animate = () => {
    if (props.direction === 'right') {
        // 向右移动
        position += Number(props.speed)
        if (position >= 0) {
            // 当向右移动百分之五十时，即potion到达了0，我们重置位置
            position = -marqueeContent.value.offsetWidth * 0.5
        }
    } else {
        position -= Number(props.speed)
        if (position <= -marqueeContent.value.offsetWidth * 0.5) {
            position = 0
        }
    }
    // 应用变换
    marqueeContent.value.style.transform = `translateX(${position}px)`

    // 继续动画
    animationId = requestAnimationFrame(animate)
}

onMounted(() => {
    if (!marquee.value || !marqueeContent.value) return

    if (props.direction === 'right') {
        // 当移动方向为向右时，我们先向左移动百分之五十，来实现无限滚动
        position = -marqueeContent.value.offsetWidth * 0.5
    }

    // 立即设置初始位置
    marqueeContent.value.style.transform = `translateX(${position}px)`

    // 开始动画
    animate()
})

// 确保组件卸载时清理动画
onUnmounted(() => {
    if (animationId) {
        cancelAnimationFrame(animationId)
    }
})
</script>
<template>
    <div class="marquee" ref="marquee">
        <div class="marquee-content" ref="marqueeContent">
            <div class="inner">
                <slot></slot>
            </div>
            <div class="inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import './style.css'
</style>