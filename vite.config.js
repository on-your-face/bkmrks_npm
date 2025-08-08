import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.', // корень — твой проектный корень
  build: {
    outDir: 'dist', // папка для сборки
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // входной html
      output: {
        // Важно, чтобы структура ассетов сохранилась
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name][extname]';
          }
          if (assetInfo.name && /\.(png|jpg|svg|webp|woff2?|ttf|eot)$/.test(assetInfo.name)) {
            return 'assets/[ext]/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3000, // или любой удобный порт
  },
});