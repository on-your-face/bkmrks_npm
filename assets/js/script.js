import { initModal } from './scripts/modal.js';
import { initNewTab } from './scripts/new_tab.js';
import { initCopy } from './scripts/copy.js';
import { initCopySmall } from './scripts/copy_small.js';
import { preloadFonts } from './scripts/preload_font.js';

(initModal(), initNewTab(), initCopy(), initCopySmall(), preloadFonts());
