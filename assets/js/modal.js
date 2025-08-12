export function initModal() {
   const resetBodyStyles = () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
   };

   document.querySelectorAll('.element[data-modal-id]').forEach((el) => {
      el.addEventListener('click', function () {
         const modalId = this.getAttribute('data-modal-id');
         const modal = document.getElementById(modalId);
         if (modal) {
            modal.classList.add('open');
            (() => {
               const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
               document.body.style.overflow = 'hidden';
               document.body.style.paddingRight = `${scrollBarWidth}px`;
            })();
         }
      });
   });

   document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
         const openModal = document.querySelector('.modal.open');
         if (openModal) {
            openModal.classList.remove('open');
            resetBodyStyles();
            closeHashtags();
         }
      }
   });

   const anchors = document.querySelectorAll('a.anchor[href^="#"]');
   const hashtagsWrappers = document.querySelectorAll('.hashtags.content__wrapper');

   const closeHashtags = () => {
      hashtagsWrappers.forEach((el) => el.classList.remove('open__hashtags'));
      anchors.forEach((el) => (el.style.opacity = ''));
   };

   anchors.forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
         event.preventDefault();
         const targetId = anchor.getAttribute('href').substring(1);
         const targetEl = document.getElementById(targetId);
         if (!targetEl || !targetEl.classList.contains('hashtags')) return;

         const isOpen = targetEl.classList.contains('open__hashtags');
         closeHashtags();
         if (!isOpen) {
            targetEl.classList.add('open__hashtags');
            anchor.style.opacity = '1';
         }
      });
   });

   let startX = 0,
      currentX = 0,
      isSwiping = false;

   document.addEventListener('touchstart', (event) => {
      const openModal = event.target.closest('.modal.open');
      if (openModal) {
         startX = event.touches[0].clientX;
         isSwiping = true;
         openModal.dataset.isSwiping = 'true';
      }
   });

   document.addEventListener('touchmove', (event) => {
      const swipingModal = document.querySelector('.modal.open[data-is-swiping="true"]');
      if (swipingModal && isSwiping) {
         currentX = event.touches[0].clientX;
         if (startX - currentX > 150) {
            swipingModal.classList.remove('open');
            resetBodyStyles();
            closeHashtags();
            isSwiping = false;
            delete swipingModal.dataset.isSwiping;
         }
      }
   });

   document.addEventListener('touchend', () => {
      const swipingModal = document.querySelector('.modal.open[data-is-swiping="true"]');
      if (swipingModal) {
         isSwiping = false;
         delete swipingModal.dataset.isSwiping;
      }
   });
}
