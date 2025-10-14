<script setup lang="ts">
import type { CollapseItemEmits, CollapseProps, CollapseItemName } from './type';
import { ref, watch, provide } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';
// 定义组件名
defineOptions({
    name: 'ErCollapse',
})

// 定义组件 props
const props = defineProps<CollapseProps>()
// 定义组件 emits
const emits = defineEmits<CollapseItemEmits>()

const activeNames = ref<CollapseItemName[]>(props.modelValue || [])

if (props.accordion && activeNames.value.length > 1) {
    console.warn('Accordion mode only allows one active item at a time.');
}

function handleItemClick(item: CollapseItemName) {
    let _activeNames = [...activeNames.value];
    if (props.accordion) {
        _activeNames = [_activeNames[0] === item ? "" : item];
        updateActiveNmaes(_activeNames);
        return;
    }
    const index = _activeNames.indexOf(item);
    if (index > -1) {
        _activeNames.splice(index, 1);
    } else {
        _activeNames.push(item);
    }
    console.log(activeNames.value,'name');
    
    updateActiveNmaes(_activeNames);
}

function updateActiveNmaes(newNames: CollapseItemName[]) {
    activeNames.value = newNames;
    emits('update:modelValue', newNames);
    emits('change', newNames);
}

watch(
    () => props.modelValue,
    (newNames) => updateActiveNmaes(newNames),
)



provide(COLLAPSE_CTX_KEY, {
    activeNames,
    handleItemClick,
})
</script>
<template>
    <div class="er-collapse">
        <slot></slot>
    </div>
</template>
<style scoped>
@import './style.css';
</style>