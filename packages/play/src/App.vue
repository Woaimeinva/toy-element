<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref(['1']);
</script>

<template>
  <er-button type="danger">111</er-button>
  <er-icon type="danger" icon="search" spin></er-icon>
  <er-button-group>
    <er-button type="primary">111</er-button>
    <er-button type="danger">2222</er-button>
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

