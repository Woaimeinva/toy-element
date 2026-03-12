<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import type { WatermarkProps } from './type'

const containerRef = ref<HTMLElement | null>(null)
const watermarkRef = ref<HTMLElement | null>(null)

defineOptions({
  name: 'ErWatermark',
  inheritAttrs: false
})

// 定义 props
const props = withDefaults(defineProps<WatermarkProps>(), {
  text: 'this is watermark',
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px',
  fontWeight: 'normal',
  color: 'rgba(227, 90, 40, 0.3)',
  xGap: 100,
  yGap: 100,
  rotate: 0
})

// 生成水印的函数
const generateWatermark = () => {
    if (!watermarkRef.value || !containerRef.value) return
    
    // 清空现有水印
    watermarkRef.value.innerHTML = ''
    
    // 等待DOM渲染完成
    nextTick(() => {
        // 获取插槽内容的宽高
        const contentElement = containerRef.value?.querySelector(':scope > *')
        if (contentElement && watermarkRef.value) {
            const contentRect = contentElement.getBoundingClientRect()
            const contentWidth = contentRect.width
            const contentHeight = contentRect.height
            
            console.log('插槽内容尺寸:', contentWidth, contentHeight)
            
            // 设置水印容器尺寸与内容一致
            watermarkRef.value.style.width = `${contentWidth}px`
            watermarkRef.value.style.height = `${contentHeight}px`
            
            // 获取水印容器的实际尺寸
            const watermarkHeight = contentHeight
            const watermarkWidth = contentWidth
            
            // 创建临时元素并应用相同的样式
            const textEle = document.createElement('p')
            textEle.textContent = props.text
            textEle.style.fontFamily = props.fontFamily
            textEle.style.fontSize = props.fontSize
            textEle.style.fontWeight = props.fontWeight
            textEle.style.color = props.color
            textEle.style.visibility = 'hidden'
            textEle.style.position = 'absolute'
            textEle.style.whiteSpace = 'nowrap'
            
            document.body.appendChild(textEle)
            const textHeight = textEle.offsetHeight
            const textWidth = textEle.offsetWidth
            document.body.removeChild(textEle)
            
            const rowNums = Math.ceil(watermarkHeight / (textHeight + props.yGap))
            const colNum = Math.ceil(watermarkWidth / (textWidth + props.xGap))
                
            for (let i = 0; i < rowNums * colNum; i++) {
                const p = document.createElement('p')
                p.textContent = props.text
                
                // 先设置所有样式，再添加到DOM
                p.style.fontFamily = props.fontFamily
                p.style.fontSize = props.fontSize
                p.style.fontWeight = props.fontWeight
                p.style.color = props.color
                p.style.whiteSpace = 'nowrap'
                p.style.opacity = '1' // 确保不透明度为1
                p.style.zIndex = '9999' // 确保层级最高
                p.style.pointerEvents = 'none' // 防止事件干扰
                
                // 计算行列位置
                const col = i % colNum
                const row = Math.floor(i / colNum)
                
                p.style.left = (col * (textWidth + props.xGap)) + 'px'
                p.style.top = (row * (textHeight + props.yGap)) + 'px'
                p.style.position = 'absolute'
                
                // 应用旋转角度
                if (props.rotate !== 0) {
                    p.style.transform = `rotate(${props.rotate}deg)`
                    p.style.transformOrigin = 'center center'
                }
                
                // 确保颜色设置正确
                p.style.setProperty('color', props.color, 'important')
                
                watermarkRef.value.appendChild(p)
            }
        }
    })
}

onMounted(() => {
    generateWatermark()
})

// 监听 props 变化，重新生成水印
watch(() => [props.text, props.fontFamily, props.fontSize, props.fontWeight, props.color, props.xGap, props.yGap, props.rotate], () => {
    generateWatermark()
})
</script>

<template>
    <div class="container" ref="containerRef">
        <slot name="content"></slot>
        <div class="watermark" ref="watermarkRef"></div>
    </div>
</template>

<style>
@import './style.css'
</style>