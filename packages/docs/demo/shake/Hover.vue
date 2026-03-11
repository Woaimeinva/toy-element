<script setup>
import { ref } from 'vue'
const hoverActive = ref(false)
</script>
<template>
    <div class="container">
        <er-shake direction="row" :active="hoverActive">
            <div style="width: 200px; height: 200px; background-color: blue; display: flex; justify-content: center; align-items: center; color: white; font-size: 18px;" 
                 @mouseenter="() => { hoverActive = true }" 
                 @mouseleave="() => { hoverActive = false }">
                鼠标悬停抖动
            </div>
        </er-shake>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
</style>