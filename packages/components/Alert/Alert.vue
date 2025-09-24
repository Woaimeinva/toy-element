<script setup lang="ts">
import { computed, ref } from 'vue';
import type { AlertEmits, AlertProps, AlertInstance } from './type';
import { typeIconMap } from '@toy-element/utils';
import ErIcon from '../Icon/Icon.vue'
const props = withDefaults(defineProps<AlertProps>(), {
    effect: 'light',
    type: 'info',
    closable: true,
})

// definination ErAlert component
defineOptions({
    name: 'ErAlert',
})

// computed iconName by type of props
const iconName = computed(() => {
    return typeIconMap.get((props.type) ?? 'info')
})

// Alter visibility
const visibility = ref(true)

// get slots
const slots = defineSlots()

// get emits
const emits = defineEmits<AlertEmits>()

// Alter open way
const open = () => {
    visibility.value = true
}

// Alter close way
const close = () => {
    visibility.value = false
    emits('close')
}

// judge icon need to be big with description
const withDescription = computed(() => {
    return props.description || slots.default
})

// export instance
defineExpose<AlertInstance>({
    open,
    close,
})
</script>
<template>
    <transition name="er-alert-fade">
        <div
            v-show="visibility"
            class="er-alert"
            :class="{
                [`er-alert__${type}`]: type,
                [`er-alert__${effect}`]: effect,
                'text-center': center,
            }"
        >
            <er-icon 
                v-if="showIcon"
                class="er-alert__icon"
                :class="{'big-icon': withDescription}"
                :icon="iconName as string" 
            />
            <div  class="er-alert__content">
                <span
                    class="er-alert__title"
                    :class="{ 'with-desc': withDescription }"
                    :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
                >
                    <slot name="title">{{ title }}</slot>
                </span>
                <p class="er-alert__description">
                    <slot>{{ description }}</slot>
                </p>
                <div class="er-alert__close" v-if="closable">
                    <er-icon icon="xmark" @click.stop="close" />
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
@import './style.css';
</style>