(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function u(){const o=()=>{document.body.style.overflow="",document.body.style.paddingRight=""};document.querySelectorAll(".element[data-modal-id]").forEach(n=>{n.addEventListener("click",function(){const r=this.getAttribute("data-modal-id"),d=document.getElementById(r);d&&(d.classList.add("open"),(()=>{const l=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${l}px`})())})}),document.addEventListener("keydown",n=>{if(n.key==="Escape"){const r=document.querySelector(".modal.open");r&&(r.classList.remove("open"),o(),a())}});const i=document.querySelectorAll('a.anchor[href^="#"]'),s=document.querySelectorAll(".hashtags.content__wrapper"),a=()=>{s.forEach(n=>n.classList.remove("open__hashtags")),i.forEach(n=>n.style.opacity="")};i.forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const d=n.getAttribute("href").substring(1),l=document.getElementById(d);if(!l||!l.classList.contains("hashtags"))return;const p=l.classList.contains("open__hashtags");a(),p||(l.classList.add("open__hashtags"),n.style.opacity="1")})});let t=0,e=0,c=!1;document.addEventListener("touchstart",n=>{const r=n.target.closest(".modal.open");r&&(t=n.touches[0].clientX,c=!0,r.dataset.isSwiping="true")}),document.addEventListener("touchmove",n=>{const r=document.querySelector('.modal.open[data-is-swiping="true"]');r&&c&&(e=n.touches[0].clientX,t-e>150&&(r.classList.remove("open"),o(),a(),c=!1,delete r.dataset.isSwiping))}),document.addEventListener("touchend",()=>{const n=document.querySelector('.modal.open[data-is-swiping="true"]');n&&(c=!1,delete n.dataset.isSwiping)})}function m(){document.querySelectorAll("a.new_tab").forEach(o=>{o.setAttribute("target","_blank"),o.setAttribute("rel","noopener noreferrer")})}function g(){document.querySelectorAll(".copylong[data-href]").forEach(o=>{o.addEventListener("click",function(i){i.preventDefault();const s=this.getAttribute("data-href");if(s){const t={npm_run_dev:"npm run dev",npm_run_preview:"npm run preview",npm_run_build:"npm run build",npm_run_deploy:"npm run deploy",nodejs_install_lastv_npm:"npm install -g npm@latest",nodejs_vite_indir:"npm create vite@latest",nodejs_npm_indir:"npm init",git_init:"git init",git_add:"git add .",git_commit:'git commit -m "ok"',git_branch_name:"git branch -M main",git_remote_add:"git remote add origin",git_push:"git push -u origin main",msword2007_templates:"%appdata%\\Microsoft\\Шаблоны",php_myadmin:"127.0.0.1/openserver/phpmyadmin/",stop_spooler:"net stop spooler",start_spooler:"net start spooler",new_branch:"создать новую ветку — git checkout -b имя_ветки",branch_global:"git config --global push.autoSetupRemote true",clear_spooler:'del /Q /F "%systemroot%\\System32\\spool\\PRINTERS\\*.*"',"cmd-cd":'cd /d "C:\\on-your-face\\"',"cmd-start":'start "" "c:\\OSPanel\\Open Server Panel.exe"',"cmd-OSP-server-START":'start "" "c:\\OSPanel\\Open Server Panel.exe" /start',"cmd-OSP-server-RESTART":'start "" "c:\\OSPanel\\Open Server Panel.exe" /restart',"cmd-OSP-server-STOP":'start "" "c:\\OSPanel\\Open Server Panel.exe" /stop',"cmd-OSP-domain":"http://test-wordpress/wp-admin/","git-clone":"git clone","git-delete (cmd)":"rmdir /s /q .git","git-push (3in1)":"git add . && git commit -m ok && git push","stop zapret":"sc stop WinDivert","regedit-autorun":"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run","close process (OSP promt)":'taskkill /IM "Open Server Panel.exe" /F',termux_iam_true:"git config --global --add safe.directory /storage/emulated/0/bookmarks","cd ~/storage/shared/bookmarks":"cd ~/storage/shared/bookmarks","termux_git-pull":"git pull origin main","block-ghost":'<div class="element ghost"></div>',"directory-buttery-taskbar":"C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter",gpt_galuni:`Ты — языковая модель, настроенная на максимальную точность, прозрачность и отказ от недостоверных утверждений.

1. Поведение при недостатке информации:

Если в ответе отсутствуют данные, ты не дополняешь их предположениями.

Вместо этого используешь одну из формулировок:

«У меня нет подтверждённой информации по этому вопросу.»

«Не могу проверить это без доступа к источнику/данным.»

«Данных недостаточно для достоверного вывода.»

2. Явное разграничение утверждений:

При генерации любого ответа чётко отмечай:

Что известно на основе подтверждённых данных.

Что является обоснованным предположением.

Где присутствует неопределённость или потенциальная ошибка.

Шаблон:

[Факт]: …

[Предположение]: …

[Неуверенность/недостаток данных]: …

3. Условия остановки:

Если ты обнаруживаешь, что вероятность ложного вывода высока (энтропия распределения вариантов ≈ равная), приостанавливаешь ответ и пишешь:

«Высокая неопределённость. Требуются уточняющие данные или проверка.»

4. Самопроверка перед выводом:

Перед завершением ответа:

Проверь согласованность с обученной базой и известными источниками.

Зафиксируй наличие внутренних противоречий.

Отметь признаки неуверенности.

5. Поведение при сомнительных утверждениях:

Если запрос содержит потенциально спорную или недостоверную информацию:

«Этот факт требует дополнительной проверки. У меня нет достоверного подтверждения.»

6. Обработка нестабильных участков генерации:

Если замечаешь:

Резкие смысловые переходы,

Неоднозначности,

Аномальные паттерны —

Остановись и используй:

«Существует семантический разрыв. Возможна ошибка в интерпретации.»

7. Принцип: отказ лучше вымысла:

Отказ от ответа допустим. Главное — не выдумывать.

8. Источник и логическая верификация:

> Основывайся на подтверждённых знаниях из обученной базы.

P.S. Этот промпт предназначен для экспертных запросов, юридической, научной и критически точной генерации, где достоверность важнее полноты и креативности.`}[s];if(t){const e=document.createElement("textarea");e.style.position="fixed",e.style.opacity="0",e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}})})}function f(){console.log("initCopySmall: скрипт инициализирован"),document.querySelectorAll("a.copy").forEach(o=>{console.log("initCopySmall: найден элемент",o),o.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),history.pushState("",document.title,window.location.pathname+window.location.search),console.log("initCopySmall: клик по элементу",o);const s=o.getAttribute("href");if(!s){console.warn("initCopySmall: href пустой");return}navigator.clipboard.writeText(s).then(()=>{console.log(`initCopySmall: скопировано в буфер — ${s}`)}).catch(a=>{console.error("initCopySmall: ошибка копирования",a)})})})}u(),m(),g(),f();
