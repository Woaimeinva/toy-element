<script setup>
import { ref } from 'vue'
</script>
<template>
    <div class="container">
        <er-watermark 
            text="自定义样式" 
            fontFamily="Microsoft YaHei" 
            fontSize="20px" 
            fontWeight="bold" 
            color="rgba(0, 0, 255, 0.3)">
            <template #content>
                <div style="width: 400px; height: 300px; background-color: #f5f5f5; padding: 20px;">
                    <h3>样式定制</h3>
                    <p>可以自定义水印的字体、颜色和大小。</p>
                    <p>蓝色粗体水印效果更明显。</p>
                </div>
            </template>
        </er-watermark>
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