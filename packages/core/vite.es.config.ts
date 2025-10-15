import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const COMP_NAMES = [
    'Alert',
    'Button',
    'Collapse',
    'Dropdown',
    'Form',
    'Icon',
    'Input',
    'Loading',
    'Message',
    'MessageBox',
    'Notification',
    'Overlay',
    'Popconfirm',
    'Select',
    'Switch',
    'Upload',
    'Tooltip',
] as const;

export default defineConfig({
    plugins: [
        // 使用vue插件，使得vite能够处理vue单文件组件
        vue(),
        // 使用vite-plugin-dts插件，生成类型声明文件,
        // 配置tsconfigPath为../../tsconfig.build.json，这个配置文件说明了哪些文件需要生成类型声明文件
        // 指定类型声明文件的输出目录为dist/types
        dts({
            tsconfigPath: '../../tsconfig.build.json',
            outDir: 'dist/types'
        }) as any
    ],
    build: {
        // 构建产物的输出目录
        outDir: 'dist/es',
        // 使用es模块格式输出库文件
        lib: {
            // 库的入口文件
            entry: resolve(__dirname, './index.ts'),
            // ES模块模式下，全局变量名称
            name: 'ToyElement',
            // 输出的文件名
            fileName: 'index',
            // 输出的文件格式
            formats: ['es'],
        },
        rollupOptions: {
            // 外部依赖，不打包进库文件
            external: [
                'vue',
                '@fortawesome/fontawesome-svg-core',
                '@fortawesome/free-solid-svg-icons',
                '@fortawesome/vue-fontawesome',
                '@popperjs/core',
                'async-validator',
            ],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') {
                        return 'index.css'
                    }
                    return assetInfo.name as string
                },
                // 代码分割，将外部依赖和hooks、utils、components分别打包到不同的文件
                // 这样可以实现按需加载，减少首页加载时间
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                    if (id.includes('/packages/hooks')) {
                        return 'hooks';
                    }
                    if (id.includes('/packages/utils')) {
                        return 'utils';
                    }
                    for (const item of COMP_NAMES) {
                        if (id.includes(`/packages/components/${item}`)) {
                            return item;
                        }
                    }
                }
            },
        }
    }
})
