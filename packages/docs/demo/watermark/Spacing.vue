<script setup>
import { ref } from 'vue'
</script>
<template>
    <div class="container">
        <er-watermark 
            text="间距控制" 
            :xGap="50" 
            :yGap="150">
            <template #content>
                <div style="width: 400px; height: 300px; background-color: #f5f5f5; padding: 20px;">
                    <h3>间距控制</h3>
                    <p>X轴间距：50px（水平密集）</p>
                    <p>Y轴间距：150px（垂直稀疏）</p>
                    <p>可以分别控制水平和垂直方向的间距。</p>
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