import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from "url";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@', replacement: fileURLToPath(new URL("./src", import.meta.url))
      },
      {
        find: '@pages', replacement: fileURLToPath(new URL("./src/pages", import.meta.url))
      },
      {
        find: '@widgets', replacement: fileURLToPath(new URL("./src/Widgets", import.meta.url))
      },
      {
        find: '@shared', replacement: fileURLToPath(new URL("./src/Shared", import.meta.url))
      },
      {
        find: '@features', replacement: fileURLToPath(new URL("./src/Features", import.meta.url))
      },
    ]
  }
})
