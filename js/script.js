const cursorShape = document.getElementById('cursor-shape');

document.addEventListener('mousemove', (e) => {
    cursorShape.style.left = e.clientX + 'px';
    cursorShape.style.top = e.clientY + 'px';
});










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

function openProjectsMenu() {
    document.getElementById('projects-menu').style.width = '100%';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('close-projects-btn').style.display = 'block';
    document.querySelectorAll('#projects-menu a').forEach((link, i) => {
        setTimeout(() => link.classList.add('show-projects-link'), i * 100);
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