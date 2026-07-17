// Mobile Menu Drawer Toggle Script
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-btn-icon');
  if (menu) {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      if (icon) icon.textContent = 'close';
    } else {
      menu.classList.add('hidden');
      if (icon) icon.textContent = 'menu';
    }
  }
}

// FAQ Accordion Toggle Script
function toggleFaq(id) {
  const ans = document.getElementById('faq-ans-' + id);
  const icon = document.getElementById('faq-icon-' + id);
  if (ans && icon) {
    if (ans.classList.contains('hidden')) {
      ans.classList.remove('hidden');
      icon.textContent = '−';
    } else {
      ans.classList.add('hidden');
      icon.textContent = '+';
    }
  }
}

// Switch Page Helper (Compatibility redirect fallback)
function switchPage(pageId) {
  if (pageId === 'home') {
    window.location.href = 'index.html';
  } else {
    window.location.href = pageId + '.html';
  }
}

// Fade out page loader screen on load
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 500); // Wait for transition to complete
  }
});
