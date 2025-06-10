const cursorShape = document.getElementById('cursor-shape');
const links = document.querySelectorAll('.overlay-content a');
const menuButtons = document.querySelectorAll('.menu-button');

// Update cursor position
document.addEventListener('mousemove', e => {
    cursorShape.style.left = e.clientX + 'px';
    cursorShape.style.top = e.clientY + 'px';
});

// Scale cursor on hover
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorShape.style.transform = 'scale(1.3)';
        cursorShape.style.backgroundColor = 'var(--darkmossgreen)';
    });
    link.addEventListener('mouseleave', () => {
        cursorShape.style.transform = 'scale(1)';
        cursorShape.style.backgroundColor = 'var(--burntsienna)';
    });
});

// Scale cursor on menu button hover
menuButtons.forEach(menu => {
    menu.addEventListener('mouseenter', () => {
        cursorShape.style.transform = 'scale(1.3)';
        cursorShape.style.backgroundColor = 'var(--darkmossgreen)';
    });
    menu.addEventListener('mouseleave', () => {
        cursorShape.style.transform = 'scale(1)';
        cursorShape.style.backgroundColor = 'var(--burntsienna)';
    });
});

// Translate links away from cursor on hover
links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const rect = link.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width * 100;
        const offsetY = (e.clientY - rect.top) / rect.height * 100;
        link.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0, 0)';
    });
});

// Toggle main menu
function openFullScreen() {
    document.getElementById('main-menu').style.height = '100%';
    document.getElementById('open-menu-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#main-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-menu-link'), i * 100);
    });
}

function closeFullScreen() {
    document.getElementById('main-menu').style.height = '0%';
    document.getElementById('open-menu-btn').style.display = 'block';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.querySelectorAll('#main-menu a').forEach(link => {
        link.classList.remove('show-menu-link');
    });

}

// Toggle projects menu
function openProjectsMenu() {
    document.getElementById('projects-menu').style.width = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-projects-btn').style.display = 'block';
    document.querySelectorAll('#projects-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-projects-link'), i * 250);
    })
}

function closeProjectsMenu() {
    document.getElementById('projects-menu').style.width = '0%';
    document.getElementById('close-projects-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#projects-menu a').forEach(link => {
        link.classList.remove('show-projects-link');
    });
}

// Toggle TSP menu
function openTSPMenu() {
    document.getElementById('tsp-menu').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-tsp-btn').style.display = 'block';
    document.querySelectorAll('#tsp-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-tsp-link'), i * 250);
    })
}
function closeTSPMenu() {
    document.getElementById('tsp-menu').style.height = '0%';
    document.getElementById('close-tsp-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#tsp-menu a').forEach(link => {
        link.classList.remove('show-tsp-link');
    });
}

// Toggle Sorting algorithms menu
function openSortingAlgorithmsMenu() {
    document.getElementById('sorting-algorithms').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-sorting-algorithms-btn').style.display = 'block';
    document.querySelectorAll('#sorting-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-sorting-link'), i * 250);
    })
}
function closeSortingAlgorithmsMenu() {
    document.getElementById('sorting-algorithms').style.height = '0%';
    document.getElementById('close-sorting-algorithms-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#sorting-menu a').forEach(link => {
        link.classList.remove('show-sorting-link');
    });
}
function openSkiplistMenu() {
    document.getElementById('skiplist').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-skip-list-btn').style.display = 'block';
    document.querySelectorAll('#skip-list a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-skip-link'), i * 250);
    })
}
function closeSkiplistMenu() {
    document.getElementById('skiplist').style.height = '0%';
    document.getElementById('close-skiplist-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#skip-list a').forEach(link => {
        link.classList.remove('show-skip-link');
    });
}

function openHuffmanMenu() {
    document.getElementById('huffman').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-huffman-btn').style.display = 'block';
    document.querySelectorAll('#huffman-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-huffman-link'), i * 250);
    })
}
function closeHuffmanMenu() {
    document.getElementById('huffman').style.height = '0%';
    document.getElementById('close-huffman-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#huffman-menu a').forEach(link => {
        link.classList.remove('show-huffman-link');
    });
}

function openChromaticNumberMenu() {
    document.getElementById('chromatic-number').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-chromatic-number-btn').style.display = 'block';
    document.querySelectorAll('#chromatic-number-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-chromatic-link'), i * 250);
    });
}
function closeChromaticNumberMenu() {
    document.getElementById('chromatic-number').style.height = '0%';
    document.getElementById('close-chromatic-number-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#chromatic-number-menu a').forEach(link => {
        link.classList.remove('show-chromatic-link');
    });
}

function openUIFMenu() {
    document.getElementById('uif-website').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-uif-btn').style.display = 'block';
    document.querySelectorAll('#uif-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-uif-link'), i * 250);
    });
}
function closeUIFMenu() {
    document.getElementById('uif-website').style.height = '0%';
    document.getElementById('close-uif-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#uif-menu a').forEach(link => {
        link.classList.remove('show-uif-link');
    });
}

function openAboutMenu() {
    document.getElementById('about-menu').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-about-btn').style.display = 'block';
    document.querySelectorAll('#about-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-about-link'), i * 250);
    });
}
function closeAboutMenu() {
    document.getElementById('about-menu').style.height = '0%';
    document.getElementById('close-about-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#about-menu a').forEach(link => {
        link.classList.remove('show-about-link');
    });
    document.querySelectorAll('.card').forEach((link, i) => {
        link.classList.remove('show-card');
    });
}

function openContactMenu() {
    document.getElementById('contact-menu').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-contact-btn').style.display = 'block';
    document.querySelectorAll('#contact-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-contact-link'), i * 250);
    });
}
function closeContactMenu() {
    document.getElementById('contact-menu').style.height = '0%';
    document.getElementById('close-contact-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#contact-menu a').forEach(link => {
        link.classList.remove('show-contact-link');
    });
}

function openResumeMenu() {
    document.getElementById('resume-menu').style.height = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-resume-btn').style.display = 'block';
    document.querySelectorAll('#resume-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-resume-link'), i * 250);
    });
}
function closeResumeMenu() {
    document.getElementById('resume-menu').style.height = '0%';
    document.getElementById('close-resume-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'block';
    document.querySelectorAll('#resume-menu a').forEach(link => {
        link.classList.remove('show-resume-link');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});

document.addEventListener('DOMContentLoaded', function () {
    const bulletLists = document.querySelectorAll('.about-bullets');
    function revealBulletsOnScroll() {
        bulletLists.forEach(list => {
            const rect = list.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                Array.from(list.children).forEach((li, i) => {
                    setTimeout(() => {
                        li.classList.add('visible');
                    }, i * 200);
                });
            }
        });
    }
    window.addEventListener('scroll', revealBulletsOnScroll);
    revealBulletsOnScroll();
});