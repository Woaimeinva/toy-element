import  { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
    plugins: [
        // 使用vue插件，使得vite能够处理vue单文件组件
        vue(),
    ],
    build: {
        // 构建产物的输出目录
        outDir: 'dist/umd',
        // 库模式下的配置
        lib: {
            // 库的入口文件
            entry: resolve(__dirname, './index.ts'),
            // UMD模式下，全局变量名称
            name: 'ToyElement',
            // 输出的文件名
            fileName: 'index',
            // 输出的文件格式
            formats: ['umd'],
        },
        rollupOptions: {
            // 外部依赖，不打包进库文件
            external: ['vue'],
            output: {
                // 使用命名导出，也就是用户可以通过这种形式引入库文件
                // import { Button } from 'toy-element'，可以让用户实现按需导入
                exports: 'named',
                // 全局变量映射，将vue映射为Vue
                globals: {
                    vue: 'Vue',
                },
                // 处理静态资源文件名，将style.css重命名为index.css
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') {
                        return 'index.css'
                    }
                    return assetInfo.name as string
                }
            }
        }
    }
})
