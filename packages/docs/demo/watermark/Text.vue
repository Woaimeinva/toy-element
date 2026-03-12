<script setup>
import { ref } from 'vue'
const handleClick = () => {
    const fullscreen = document.createElement('er-watermark')
    fullscreen.text = '机密文件 - 禁止复制'
    const layout = document.getElementsByClassName('Layout')[0]
    fullscreen.appendChild(layout)
    const app = document.getElementById('app')
    app.appendChild(fullscreen)
    console.log(fullscreen)
}
</script>
<template>
    <div class="container">
        <er-button type="primary" @click="handleClick">全屏水印</er-button>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}
</style>