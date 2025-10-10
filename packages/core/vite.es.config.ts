import { defineConfig } from "vite";
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
        vue(),
        /* 
            为tsconfig.build.json文件中include的文件自动生成类型声明，
            提升使用该组件库的用户体验，
            将类型声明文件输出到目录dist/types下
        */ 
        dts({
            tsconfigPath: '../../tsconfig.build.json',
            outDir: 'dist/types',
        }) as any
    ],
    build: {
        outDir: 'dist/es',
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'ToyElement',
            fileName: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            // 将这些依赖排除，由用户自行安装
            external: [
                'vue',
                '@fortawesome/fontawesome-svg-core',
                '@fortawesome/free-solid-svg-icons',
                '@fortawesome/vue-fontawesome',
                '@popperjs/core',
                'async-validator',
            ],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') {
                        return 'index.css'
                    }
                    return assetInfo.name as string
                },
                /* 
                    将代码拆分成多个独立的chunk(代码块)，让用户在使用我们的组件库时，只需要加载自己需要的部分，而不是整个库，
                    从而减小用户项目的体积
                    在首次加载时，如果不拆分代码，用户需要下载整个库的的单文件(即使多余的文件最后会被tree-shaking剔除)，但是拆分代码后，用户只需要下载用到的组文件
                    这里的id时文件路径，比如/packages/hooks
                */
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
            }
        }
    }
})
