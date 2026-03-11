<script setup>
import { ref } from 'vue'
const marioActive = ref(false)
</script>
<template>
    <div class="container">
        <er-shake direction="column" :active="marioActive">
            <img src="/images/box1.jpeg" style="width: 50px; height: auto;">
        </er-shake>
        <div>
            <er-shake direction="column" :active="marioActive" :amplitude="100">
                <img src="/images/mario.png" style="width: 200px; margin-top: 100px;"
                    @mouseenter="() => { marioActive = true }" @mouseleave="() => { marioActive = false }">
            </er-shake>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>