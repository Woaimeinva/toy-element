<script setup>
import { ref } from 'vue'
const allActive = ref(false)
</script>
<template>
    <div class="container">
        <er-button @click="() => { allActive = !allActive }">
            全部抖动
        </er-button>
        <br><br>
        <div style="display: flex; gap: 20px;">
            <er-shake direction="row" :active="allActive">
                <div style="width: 100px; height: 100px; background-color: red;"></div>
            </er-shake>
            <er-shake direction="column" :active="allActive" :amplitude="5">
                <div style="width: 100px; height: 100px; background-color: green;"></div>
            </er-shake>
            <er-shake direction="row" :active="allActive" :frequency="2">
                <div style="width: 100px; height: 100px; background-color: blue;"></div>
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
    height: 200px;
}
</style>