<script setup>
import { ref } from 'vue'
</script>
<template>
    <div class="container">
        <er-watermark 
            text="倾斜水印" 
            :rotate="-15">
            <template #content>
                <div style="width: 400px; height: 300px; background-color: #f5f5f5; padding: 20px;">
                    <h3>旋转水印</h3>
                    <p>水印旋转角度：-15度（逆时针）</p>
                    <p>倾斜的水印效果更具设计感。</p>
                    <p>可以设置任意角度，正值为顺时针，负值为逆时针。</p>
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