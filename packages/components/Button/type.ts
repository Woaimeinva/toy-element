import type { Component, Ref } from "vue";

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'large' | 'default' | 'small'

export interface ButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    nativeType?: NativeType;
    tag?: string | Component;
    throttleDuration?: number; // 节流时间，单位ms
    plain?: true | false;
    round?: true | false;
    circle?: true | false;
    loading?: true | false;
    disabled?: true | false;
    autofocus?: true | false;
    useThrottle?: true | false;
    loadingIcon?: string;
    icon?: string
}

export interface ButtonEmits {
    (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>
}

// ButtonGroupProps类型定义
export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: true | false;
}

// ButtonGroupContext类型定义
export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: true | false;
}