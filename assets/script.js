import './sass/reset.scss';
import './sass/base.scss';
import './sass/fonts.scss';
import './sass/main.scss';




import './sass/style.scss';
import './sass/modal_gyv.scss';
import './sass/divider.scss';
import { initModal } from './js/modal.js';
import { initNewTab } from './js/new_tab.js';
import { initCopy } from './js/copy.js';
import { initCopySmall } from './js/copy_small.js';
import { preloadFonts } from './js/preload_font.js';

(initModal(), initNewTab(), initCopy(), initCopySmall(), preloadFonts());
