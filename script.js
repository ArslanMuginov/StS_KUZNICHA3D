'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');
  navigation.classList.toggle('is-open', !isOpen);
});
navigation?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Открыть меню');
}));
const dialog = document.querySelector('.image-dialog');
const dialogImage = dialog?.querySelector('img');
const caption = dialog?.querySelector('.dialog-caption');
document.querySelectorAll('.image-zoom').forEach(button => button.addEventListener('click', () => {
  dialogImage.src = button.dataset.image;
  dialogImage.alt = button.dataset.alt || 'Фотография разработанного изделия';
  caption.textContent = dialogImage.alt;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else window.open(dialogImage.src, '_blank', 'noopener');
}));
dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelectorAll('.partner img').forEach(img => {
  img.addEventListener('error', () => img.classList.add('is-broken'));
  if (img.complete && img.naturalWidth === 0) img.classList.add('is-broken');
});