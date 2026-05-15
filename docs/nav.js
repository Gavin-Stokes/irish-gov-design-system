/* ============================================================
   Irish Gov Design System Docs — Navigation
   ============================================================ */

(function () {
  /* ── Nav structure ─────────────────────────────────────── */
  const NAV = [
    {
      category: 'Get started',
      items: [
        { label: 'Introduction',    href: 'index.html' },
        { label: 'Getting started', href: 'getting-started.html' },
      ],
    },
    {
      category: 'Foundations',
      items: [
        { label: 'Colours',      href: 'foundations/colours.html' },
        { label: 'Typography',   href: 'foundations/typography.html' },
        { label: 'Spacing',      href: 'foundations/spacing.html' },
        { label: 'Iconography',  href: 'foundations/iconography.html' },
      ],
    },
    {
      category: 'Components',
      items: [
        { label: 'Button',       href: 'components/button.html' },
        { label: 'Card',         href: 'components/card.html' },
        { label: 'Form field',   href: 'components/form-field.html' },
        { label: 'Header',       href: 'components/header.html' },
        { label: 'Help panel',   href: 'components/help-panel.html' },
        { label: 'Navigation',   href: 'components/navigation.html' },
      ],
    },
    {
      category: 'Patterns',
      items: [
        { label: 'Housing application', href: 'patterns/housing-application.html' },
        { label: 'Multi-step forms',    href: 'patterns/forms.html' },
      ],
    },
  ];

  /* ── Resolve path relative to docs root ────────────────── */
  // Each page sets window.DOCS_ROOT = './' or '../'
  const ROOT = (typeof window.DOCS_ROOT !== 'undefined') ? window.DOCS_ROOT : './';

  function resolveHref(href) {
    return ROOT + href;
  }

  /* ── Determine active page ──────────────────────────────── */
  function isActive(href) {
    const resolved = resolveHref(href);
    // Normalise both paths for comparison
    const current = window.location.pathname.replace(/\\/g, '/');
    const target  = resolved.replace(/^\.\//, '').replace(/^\.\.\//, '');
    return current.endsWith(target);
  }

  /* ── Build nav HTML ─────────────────────────────────────── */
  function buildNav() {
    const container = document.getElementById('nav-container');
    if (!container) return;

    let html = '<div class="sidebar__inner">';

    NAV.forEach(function (section) {
      html += '<div class="nav-category">';
      html += '<span class="nav-category__label">' + escHtml(section.category) + '</span>';

      section.items.forEach(function (item) {
        const active = isActive(item.href) ? ' active' : '';
        html += '<a href="' + resolveHref(item.href) + '" class="nav-item' + active + '">' + escHtml(item.label) + '</a>';
      });

      html += '</div>';
    });

    html += '</div>';
    container.innerHTML = html;
  }

  /* ── Escape HTML ────────────────────────────────────────── */
  function escHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ── Mobile sidebar toggle ──────────────────────────────── */
  function initMobileToggle() {
    const toggle  = document.querySelector('.topbar__menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Create overlay
    let overlay = document.getElementById('sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'sidebar-overlay';
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
    }

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        if (sidebar.classList.contains('open')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });
    }

    overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
        if (toggle) toggle.focus();
      }
    });
  }

  /* ── Tab logic ──────────────────────────────────────────── */
  function initTabs() {
    const tablist = document.querySelector('[role="tablist"]');
    if (!tablist) return;

    const tabs   = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const panels = tabs.map(function (t) {
      return document.getElementById(t.getAttribute('aria-controls'));
    });

    function activateTab(tab) {
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function (p) {
        if (p) p.classList.remove('active');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.classList.add('active');
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () { activateTab(tab); });

      tab.addEventListener('keydown', function (e) {
        const idx = tabs.indexOf(tab);
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = tabs[(idx + 1) % tabs.length];
          next.focus();
          activateTab(next);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
          prev.focus();
          activateTab(prev);
        } else if (e.key === 'Home') {
          e.preventDefault();
          tabs[0].focus();
          activateTab(tabs[0]);
        } else if (e.key === 'End') {
          e.preventDefault();
          tabs[tabs.length - 1].focus();
          activateTab(tabs[tabs.length - 1]);
        }
      });
    });

    // Activate first tab
    if (tabs.length) activateTab(tabs[0]);
  }

  /* ── Copy code button ───────────────────────────────────── */
  function initCopyButtons() {
    document.querySelectorAll('.code-block__copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const pre = btn.closest('.code-block').querySelector('pre');
        if (!pre) return;
        navigator.clipboard.writeText(pre.innerText.trim()).then(function () {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  }

  /* ── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    buildNav();
    initMobileToggle();
    initTabs();
    initCopyButtons();
  });
})();
