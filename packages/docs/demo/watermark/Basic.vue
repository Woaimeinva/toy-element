<script setup>
import { ref } from 'vue'
</script>
<template>
    <div class="container">
        <er-watermark text="绝密文件，严禁外传" :xGap="30" :yGap="30" :rotate="10">
            <template #content>
                <div>
                    <h3>重要文档</h3>
                    <p>重要内容 重要内容 重要内容 重要内容 重要内容 重要内容</p>
                    <p>重要内容 重要内容 重要内容 重要内容 重要内容 重要内容</p>
                    <p>重要内容 重要内容 重要内容 重要内容 重要内容 重要内容</p>
                    <p>重要内容 重要内容 重要内容 重要内容 重要内容 重要内容</p>
                    <p>重要内容 重要内容 重要内容 重要内容 重要内容 重要内容</p>
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