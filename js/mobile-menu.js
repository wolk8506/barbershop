(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuAbout = document.querySelector('.js-close-about');
  const closeMenuPrice = document.querySelector('.js-close-price');
  const closeMenuMaster = document.querySelector('.js-close-master');
  const closeMenuContact = document.querySelector('.js-close-contact');
  const closeMenuTel = document.querySelector('.js-close-tel');
  const closeMenuBtnHeader = document.querySelector('.js-close-btn-header');
  const closeMenuInstagram = document.querySelector('.js-close-instagram');
  const closeMenuYoutube = document.querySelector('.js-close-youtube');
  // const closeMenuAbout = document.querySelector('.js-close-about');
  

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
    

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuAbout.addEventListener('click', toggleMenu);
  closeMenuPrice.addEventListener('click', toggleMenu);
  closeMenuMaster.addEventListener('click', toggleMenu);
  closeMenuContact.addEventListener('click', toggleMenu);
  closeMenuTel.addEventListener('click', toggleMenu);
  closeMenuBtnHeader.addEventListener('click', toggleMenu);
  closeMenuInstagram.addEventListener('click', toggleMenu);
  closeMenuYoutube.addEventListener('click', toggleMenu);


  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
