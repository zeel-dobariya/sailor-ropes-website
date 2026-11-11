document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.classList.toggle('is-active', open);
    });
  }
  const search = document.getElementById('productSearch');
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noProducts');
  if (search && grid) {
    search.addEventListener('input', function () {
      const term = search.value.toLowerCase().trim();
      let shown = 0;
      grid.querySelectorAll('.searchable-product').forEach(function (card) {
        const match = (card.dataset.search || '').includes(term);
        card.hidden = !match;
        if (match) shown++;
      });
      if (noResults) noResults.hidden = shown !== 0;
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { event.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
});
