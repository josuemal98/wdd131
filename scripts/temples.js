const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById('last-modified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        
        if (navLinks.classList.contains('open')) {
            menuToggle.textContent = 'X';
        } else {
            menuToggle.textContent = '☰';
        }
    });
}