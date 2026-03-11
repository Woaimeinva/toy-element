<script setup>
import { ref } from 'vue'
const buttonActive = ref(false)
const handleClick = () => {
    buttonActive.value = !buttonActive.value
    setTimeout(() => {
        buttonActive.value = false
    }, 300)
}
</script>
<template>
    <div class="container">
        <er-shake direction="row" :active="buttonActive" :amplitude="1" :duration="300">
            <er-button type="primary" @click="handleClick">
                点击我抖动
            </er-button>
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