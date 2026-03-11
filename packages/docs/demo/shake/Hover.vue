<script setup>
import { ref } from 'vue'
const hoverActive = ref(false)
</script>
<template>
    <er-button @click="() => { hoverActive = !hoverActive }">
        消息提醒
    </er-button>
    <div class="container">
        <er-shake direction="row" :active="hoverActive">
            <img src="/images/sample2.jpg" alt="">
        </er-shake>
    </div>
</template>
<style scoped>
.container {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid black;
    overflow: hidden;
}
</style>