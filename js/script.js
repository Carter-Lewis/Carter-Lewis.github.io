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