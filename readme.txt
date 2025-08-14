Bkmrks 🚀

Bkmrks — фронтенд-проект, созданный с использованием Vite и npm. Проект включает современные инструменты для разработки, сборки и оптимизации.

🛠 Технологии и инструменты

⚡ Vite — быстрый сборщик и dev-сервер
📦 npm — управление зависимостями и скриптами
🎨 Sass — препроцессор CSS
✨ Prettier — автоматическое форматирование кода
🖼 SVGO — оптимизация SVG-файлов
🌐 gh-pages — деплой на GitHub Pages
📝 vite-plugin-html-inject — работа с HTML-шаблонами

✅ Основные возможности

🏗 Разработка проекта с нуля и сборка для продакшена
🎨 Оптимизация графики (SVG)
🧹 Форматирование и поддержка кода в чистоте
🚀 Быстрый деплой на GitHub Pages

🔧 Конфигурация Vite

- Базовый путь: /bkmrks/ (для GitHub Pages)
- Выходная папка сборки: dist
- Кастомная структура ассетов:
- CSS → assets/css/[name][extname]
- Изображения и шрифты → assets/[ext]/[name][extname]
- Остальные файлы → assets/[name][extname]
- JS-файлы: assets/js/[name]-[hash].js
- Dev-сервер на порту 3000 с автооткрытием браузера
- Плагин vite-plugin-html-inject для работы с HTML

📜 Скрипты

- npm run dev — запуск в режиме разработки
- npm run build — сборка проекта
- npm run preview — просмотр сборки
- npm run deploy — деплой на GitHub Pages
- npm run format — форматирование всего кода
- npm run svgo:optimize — оптимизация SVG