<script setup>
import { ref } from 'vue'
const text = ref('组合使用')
const fontFamily = ref('Microsoft YaHei')
const fontSize = ref('18px')
const fontWeight = ref('bold')
const color = ref('rgba(255, 0, 0, 0.2)')
const xGap = ref(80)
const yGap = ref(120)
const rotate = ref(10)
</script>
<template>
    <div class="container">
        <er-watermark 
            :text="text" 
            :fontFamily="fontFamily" 
            :fontSize="fontSize" 
            :fontWeight="fontWeight"
            :color="color"
            :xGap="xGap" 
            :yGap="yGap" 
            :rotate="rotate">
            <template #content>
                <div class="content-panel">
                    <h3>组合使用示例</h3>
                    <div class="controls">
                        <div class="control-item">
                            <span>文字：</span>
                            <input type="text" v-model="text">
                        </div>
                        <div class="control-item">
                            <span>字体：</span>
                            <input type="text" v-model="fontFamily">
                        </div>
                        <div class="control-item">
                            <span>字体大小：</span>
                            <input type="text" v-model="fontSize">
                        </div>
                        <div class="control-item">
                            <span>字体粗细：</span>
                            <input type="text" v-model="fontWeight">
                        </div>
                        <div class="control-item">
                            <span>颜色：</span>
                            <input type="text" v-model="color">
                        </div>
                        <div class="control-item">
                            <span>旋转角度：</span>
                            <input type="number" v-model="rotate">
                        </div>
                        <div class="control-item">
                            <span>X轴间距：</span>
                            <input type="number" v-model="xGap">
                        </div>
                        <div class="control-item">
                            <span>Y轴间距：</span>
                            <input type="number" v-model="yGap">
                        </div>
                    </div>
                    <div class="preview-info">
                        <p>当前设置：</p>
                        <p>字体：{{ fontFamily }}，{{ fontSize }}，{{ fontWeight }}</p>
                        <p>颜色：{{ color }}</p>
                        <p>间距：X轴{{ xGap }}px，Y轴{{ yGap }}px</p>
                        <p>旋转：{{ rotate }}度</p>
                    </div>
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
    min-height: 400px;
    padding: 20px;
}

.content-panel {
    max-width: 600px;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 15px 0;
}

.control-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.control-item span {
    min-width: 80px;
    font-size: 14px;
    color: #666;
}

.control-item input {
    flex: 1;
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
}

.control-item input:focus {
    outline: none;
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

.preview-info {
    margin-top: 15px;
    padding: 10px;
    background-color: #e8f4fd;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
}

.preview-info p {
    margin: 5px 0;
}

h3 {
    margin: 0 0 15px 0;
    color: #333;
    text-align: center;
}
</style>