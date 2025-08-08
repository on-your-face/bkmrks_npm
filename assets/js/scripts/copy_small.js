export function initCopySmall() {
  // Находим все ссылки с классом copy
  document.querySelectorAll('a.copy').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const href = link.getAttribute('href');
      if (!href) return;

      // Копируем в буфер обмена через современный API
      navigator.clipboard
        .writeText(href)
        .then(() => {
          console.log(`Скопировано: ${href}`);
        })
        .catch((err) => {
          console.error('Ошибка копирования:', err);
        });
    });
  });
}
