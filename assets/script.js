// scss
import './sass/main/reset.scss';
import './sass/main/base.scss';
import './sass/main/fonts.scss';
import './sass/main/main.scss';
import './sass/style.scss';
import './sass/mobile_comfort.scss';

import './sass/other/divider.scss';
// scripts
import { initModal } from './js/modal.js';
import { initNewTab } from './js/new_tab.js';
import { initCopy } from './js/copy.js';
import { initCopySmall } from './js/copy_small.js';
import { preloadFonts } from './js/preload_font.js';
// initScript
(initModal(), initNewTab(), initCopy(), initCopySmall(), preloadFonts());
