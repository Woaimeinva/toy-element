<script setup lang="ts">
import { ref } from 'vue';
import Shake from '../../components/Shake/Shake.vue'
import mario from '../../docs/public/images/mario.png'
import box from '../../docs/public/images/box1.jpeg'



const activeNames = ref(['1']);

const shakeActive1 = ref(false)
const shakeActive2 = ref(false)
const shakeActive3 = ref(false)

const marioActive = ref(false)
const boxActive = ref(false)
</script>

<template>
  <br>
  <br>
  <div style="background-color: red; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <er-shake direction="column" :active="marioActive">
      <img :src="box" style="width: 50px; height: auto;">
    </er-shake>
    <div>
    <er-shake direction="column" :active="marioActive" :amplitude="100">
      <img :src="mario" style="width: 200px; margin-top: 100px; background-color: blue;"
        @mouseenter="() => { marioActive = true }" @mouseleave="() => { marioActive = false }">
    </er-shake>
    </div>
  </div>
  <br>
  <br>

  <button @click="() => { shakeActive1 = !shakeActive1 }">click me 1 (垂直1)</button>
  <button @click="() => { shakeActive2 = !shakeActive2 }">click me 2 (水平)</button>
  <button @click="() => { shakeActive3 = !shakeActive3 }">click me 3 (垂直2)</button>
  <Shake v-model:active="shakeActive1" direction="column">
    <div style="background-color: red; width: 100px; height: 100px;">垂直抖动1</div>
  </Shake>
  <Shake v-model:active="shakeActive3" direction="column" :amplitude="100" :frequency="1">
    <div style="background-color: red; width: 100px; height: 100px;">垂直抖动2</div>
  </Shake>
  <Shake v-model:active="shakeActive2" direction="row">
    <div style="background-color: red; width: 100px; height: 100px;">水平抖动</div>
  </Shake>

  <er-button type="danger" circle icon="search"></er-button>
  <er-icon type="danger" icon="search" spin></er-icon>
  <er-button-group>
    <er-button type="primary" plain>111</er-button>
    <er-button type="danger" round>2222</er-button>
    <er-button type="danger">3333</er-button>
  </er-button-group>
  <er-alert type="danger" title="danger" description="danger description" :showIcon="true"></er-alert>
  <er-collapse v-model="activeNames" accordion>
    <er-collapse-item name="1">
      <template #header>
        <span>111</span>
      </template>
      <div>
        111
      </div>
    </er-collapse-item>
    <er-collapse-item name="2">
      <template #header>
        <span>222</span>
      </template>
      <div>
        222
      </div>
    </er-collapse-item>
    <er-collapse-item name="3">
      <template #header>
        <span>333</span>
      </template>
      <div>
        333
      </div>
    </er-collapse-item>
  </er-collapse>
</template>
