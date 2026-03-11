<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'


defineOptions({
    name: 'ErShake',
    inheritAttrs: false
})

// 使用 defineProps 定义属性
const props = defineProps({
    direction: {
        type: String,
        default: 'row'
    },
    amplitude: {
        type: Number,
        default: 3
    },
    duration: {
        type: Number,
        default: 800
    },
    frequency: {
        type: Number,
        default: 4
    }
})

const active = defineModel('active', {
    default: false,
    type: Boolean
})

const containerRef = ref<HTMLElement | null>(null)
let animationFrameId: number | null = null
let startTime: number | null = null
let originalTransform = ''

const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = (elapsed % props.duration) / props.duration
    
    if (!containerRef.value) {
        animationFrameId = requestAnimationFrame(animate)
        return
    }

    const amplitude = props.amplitude
    const direction = props.direction
    const frequency = props.frequency
    
    // 直接使用不同的动画逻辑
    let transform = ''
    if (direction === 'row') {
        // 水平抖动
        const offset = Math.sin(progress * Math.PI * frequency) * amplitude
        transform = `translateX(${offset}px)`
    } else {
        // 垂直抖动
        const offset = Math.sin(progress * Math.PI * frequency) * amplitude
        transform = `translateY(${offset}px)`
    }
    
    containerRef.value.style.transform = transform
    
    animationFrameId = requestAnimationFrame(animate)
}

const startAnimation = () => {
    if (animationFrameId !== null) return
    
    if (containerRef.value) {
        originalTransform = containerRef.value.style.transform || ''
    }
    
    startTime = null
    animationFrameId = requestAnimationFrame(animate)
}

const stopAnimation = () => {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
    }
    
    if (containerRef.value) {
        containerRef.value.style.transform = originalTransform
    }
}

watch(active, (newVal) => {
    if (newVal) {
        startAnimation()
    } else {
        stopAnimation()
    }
})

onUnmounted(() => {
    stopAnimation()
})
</script>

<template>
    <div ref="containerRef" class="shake-container">
        <slot></slot>
    </div>
</template>

<style scoped>
.shake-container {
    display: inline-block;
}
</style>
