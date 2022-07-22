import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "/src",
            "components": "/src/components",
            "@styles": "/src/styles"
        }
    },
    optimizeDeps: {
        include: ['lodash']
    },
    plugins: [vue()]
})
