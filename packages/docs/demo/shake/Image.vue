<script setup>
import { ref } from 'vue'
const imageActive = ref(false)
</script>
<template>
    <div class="container">
        <er-shake direction="column" :active="imageActive" :amplitude="2">
            <img src="/images/mario.png" style="width: 200px; height: auto;" 
                 @click="() => { imageActive = !imageActive }">
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