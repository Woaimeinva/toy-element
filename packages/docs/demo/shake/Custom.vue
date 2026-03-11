<script setup>
import { ref } from 'vue'
const active = ref(false)
</script>
<template>
    <div class="container">
        <er-button @click="() => { active = !active }">
            控制抖动
        </er-button>
        <br><br>
        <div class="box-container">
            <er-shake direction="column" :active="active" :amplitude="10" :frequency="6" :duration="500">
                <div style="width: 100px; height: 100px; background-color: red;"></div>
            </er-shake>
            <er-shake direction="row" :active="active" :amplitude="30" :frequency="12" :duration="500">
                <div style="width: 100px; height: 100px; background-color: pink;"></div>
            </er-shake>
            <er-shake direction="column" :active="active" :amplitude="10" :frequency="2" :duration="500">
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
.box-container {
    display: flex;
    gap: 20px;
}
</style>