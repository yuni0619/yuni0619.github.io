document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  // 手機版：點有子選單的項目先展開子選單，而不是直接跳頁
  document.querySelectorAll('.nav-item.has-sub > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        const item = link.parentElement;
        if (!item.classList.contains('open')) {
          e.preventDefault();
          document.querySelectorAll('.nav-item.open').forEach(i => i !== item && i.classList.remove('open'));
          item.classList.toggle('open');
        }
      }
    });
  });

  // 標示目前頁面對應的導覽項目
  const current = document.body.getAttribute('data-page');
  if (current) {
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-page') === current) item.classList.add('current');
    });
  }
});
