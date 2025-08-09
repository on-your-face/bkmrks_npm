(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(n){if(n.ep)return;n.ep=!0;const e=i(n);fetch(n.href,e)}})();function u(){const t=()=>{document.body.style.overflow="",document.body.style.paddingRight=""};document.querySelectorAll(".element[data-modal-id]").forEach(o=>{o.addEventListener("click",function(){const s=this.getAttribute("data-modal-id"),d=document.getElementById(s);d&&(d.classList.add("open"),(()=>{const l=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${l}px`})())})}),document.addEventListener("keydown",o=>{if(o.key==="Escape"){const s=document.querySelector(".modal.open");s&&(s.classList.remove("open"),t(),a())}});const r=document.querySelectorAll('a.anchor[href^="#"]'),i=document.querySelectorAll(".hashtags.content__wrapper"),a=()=>{i.forEach(o=>o.classList.remove("open__hashtags")),r.forEach(o=>o.style.opacity="")};r.forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const d=o.getAttribute("href").substring(1),l=document.getElementById(d);if(!l||!l.classList.contains("hashtags"))return;const m=l.classList.contains("open__hashtags");a(),m||(l.classList.add("open__hashtags"),o.style.opacity="1")})});let n=0,e=0,c=!1;document.addEventListener("touchstart",o=>{const s=o.target.closest(".modal.open");s&&(n=o.touches[0].clientX,c=!0,s.dataset.isSwiping="true")}),document.addEventListener("touchmove",o=>{const s=document.querySelector('.modal.open[data-is-swiping="true"]');s&&c&&(e=o.touches[0].clientX,n-e>150&&(s.classList.remove("open"),t(),a(),c=!1,delete s.dataset.isSwiping))}),document.addEventListener("touchend",()=>{const o=document.querySelector('.modal.open[data-is-swiping="true"]');o&&(c=!1,delete o.dataset.isSwiping)})}function p(){document.querySelectorAll("a.new_tab").forEach(t=>{t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")})}function g(){document.querySelectorAll(".copylong[data-href]").forEach(t=>{t.addEventListener("click",function(r){r.preventDefault();const i=this.getAttribute("data-href");if(i){const n={npm_run_dev:"npm run dev",npm_run_preview:"npm run preview",npm_run_build:"npm run build",npm_run_deploy:"npm run deploy",nodejs_install_lastv_npm:"npm install -g npm@latest",nodejs_vite_indir:"npm create vite@latest",nodejs_npm_indir:"npm init",git_init:"git init",git_add:"git add .",git_commit:'git commit -m "ok"',git_branch_name:"git branch -M main",git_remote_add:"git remote add origin",git_push:"git push -u origin main",msword2007_templates:"%appdata%\\Microsoft\\Шаблоны",php_myadmin:"127.0.0.1/openserver/phpmyadmin/",stop_spooler:"net stop spooler",start_spooler:"net start spooler",new_branch:"создать новую ветку — git checkout -b имя_ветки",branch_global:"git config --global push.autoSetupRemote true",clear_spooler:'del /Q /F "%systemroot%\\System32\\spool\\PRINTERS\\*.*"',"cmd-cd":'cd /d "C:\\on-your-face\\"',"cmd-start":'start "" "c:\\OSPanel\\Open Server Panel.exe"',"cmd-OSP-server-START":'start "" "c:\\OSPanel\\Open Server Panel.exe" /start',"cmd-OSP-server-RESTART":'start "" "c:\\OSPanel\\Open Server Panel.exe" /restart',"cmd-OSP-server-STOP":'start "" "c:\\OSPanel\\Open Server Panel.exe" /stop',"cmd-OSP-domain":"http://test-wordpress/wp-admin/","git-clone":"git clone","git-delete (cmd)":"rmdir /s /q .git","git-push (3in1)":"git add . && git commit -m ok && git push","stop zapret":"sc stop WinDivert","regedit-autorun":"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run","close process (OSP promt)":'taskkill /IM "Open Server Panel.exe" /F',termux_iam_true:"git config --global --add safe.directory /storage/emulated/0/bookmarks","cd ~/storage/shared/bookmarks":"cd ~/storage/shared/bookmarks","termux_git-pull":"git pull origin main","block-ghost":'<div class="element ghost"></div>',"directory-buttery-taskbar":"C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter",gpt_galuni:`Ты — языковая модель, настроенная на максимальную точность, прозрачность и отказ от недостоверных утверждений.

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

P.S. Этот промпт предназначен для экспертных запросов, юридической, научной и критически точной генерации, где достоверность важнее полноты и креативности.`}[i];if(n){const e=document.createElement("textarea");e.style.position="fixed",e.style.opacity="0",e.value=n,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}})})}function f(){console.log("initCopySmall: скрипт инициализирован"),document.querySelectorAll("a.copy").forEach(t=>{console.log("initCopySmall: найден элемент",t),t.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),history.pushState("",document.title,window.location.pathname+window.location.search),console.log("initCopySmall: клик по элементу",t);const i=t.getAttribute("href");if(!i){console.warn("initCopySmall: href пустой");return}navigator.clipboard.writeText(i).then(()=>{console.log(`initCopySmall: скопировано в буфер — ${i}`)}).catch(a=>{console.error("initCopySmall: ошибка копирования",a)})})})}async function h(){const t=await fetch("assets/html/main.html");if(!t.ok){console.error("Ошибка загрузки main.html:",t.status);return}const r=await t.text();document.getElementById("main-container").innerHTML=r}async function y(){const t=await fetch("./assets/html/modals.html");if(!t.ok){console.error("Ошибка загрузки modals.html:",t.status);return}const r=await t.text();document.getElementById("modals-container").innerHTML=r,console.log("modals.html загружен и вставлен")}async function _(){await h(),await y(),u(),p(),g(),f()}_();
