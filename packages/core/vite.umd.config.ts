import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        // 在构建时，将构建产物输出到core/dist/umd目录下
        outDir: 'dist/umd',
        // 以库的形式构建，构建的产物最终会是一个或多个js文件
        lib: {
            // 定义库的入口文件
            entry: resolve(__dirname, 'index.ts'),
            // 定义库的名字，当用户通过script标签引入我们的库时，我们的库会被挂载在window.ToyElement上
            name: 'ToyElement',
            // 构建的产物的名字
            fileName: 'index',
            // 明确构建产物的格式为umd
            formats: ['umd'],
        },
        // 控制库的构建过程，尤其是外部依赖处理和输出的文件格式
        rollupOptions: {
            // 声明vue为外部依赖，不会打包到我们的库中，因为我们的库是基于vue开发的，如果用户要使用我们的库，通常在安装我们的库之前，就自己安装了vue
            external: ['vue'],
            // 控制输出文件的具体格式和行为
            output: {
                /* 
                    指定库的导出方式为命名导出
                    比如，我们在入口文件中用 export const ErButton = ...导出组件
                    那么，打包后用户可以通过 import { ErButton } from '我们的库'，无需引入整个库对象
                */
                exports: 'named',
                // 声明外部依赖在全局环境中的变量名
                globals: {
                    // 库会假设全局变量 window.Vue存在，确保打包后的代码能够找到外部依赖的全局变量
                    vue: 'Vue'
                },
                // 自定义静态资源文件的文件输出名
                assetFileNames: (assetInfo) => {
                    // 将style.css文件名修改为index.css
                    if (assetInfo.name === 'style.css') {
                        return 'index.css'
                    }
                    return assetInfo.name as string
                }
            }
        }
    }
})
