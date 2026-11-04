'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');

function closeMenu() {
  if (!navigation || !menuButton) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
}

menuButton?.addEventListener('click', () => {
  const nextOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation?.classList.toggle('is-open', nextOpen);
  menuButton.setAttribute('aria-expanded', String(nextOpen));
  menuButton.setAttribute('aria-label', nextOpen ? 'Закрыть меню' : 'Открыть меню');
});

navigation?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelectorAll('.hero-grant-brand img').forEach(img => {
  const showFallback = () => img.classList.add('is-broken');
  img.addEventListener('error', showFallback);
  if (img.complete && img.naturalWidth === 0) showFallback();
});
