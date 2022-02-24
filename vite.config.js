import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint';

export default {
  plugins: [vue(), ssr(), eslintPlugin()],  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  }
}
