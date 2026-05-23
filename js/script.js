// ============================================================
// CURSOR
// ============================================================
(function () {
    const cursor = document.getElementById('cursor');
    if (!cursor || 'ontouchstart' in window) {
        if (cursor) cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }

    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    }, { passive: true });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a, button, .project-card, [onclick]').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    });
})();

// ============================================================
// NAV — scroll state
// ============================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ============================================================
// MOBILE NAV
// ============================================================
const navToggle  = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
});

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('click', e => {
    if (mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
        closeMobileMenu();
    }
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            target.classList.add('visible');
            revealObserver.unobserve(target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-card, .reveal-header').forEach(el => {
    revealObserver.observe(el);
});

// ============================================================
// PROJECT DETAIL OVERLAYS
// ============================================================
let activeDetail = null;

function openProject(id) {
    closeProject();
    const detail   = document.getElementById('detail-' + id);
    const backdrop = document.getElementById('overlay-backdrop');
    if (!detail) return;

    detail.scrollTop = 0;
    detail.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeDetail = detail;
}

function closeProject() {
    if (!activeDetail) return;
    activeDetail.classList.remove('open');
    document.getElementById('overlay-backdrop').classList.remove('open');
    document.body.style.overflow = '';
    activeDetail = null;
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProject();
});
