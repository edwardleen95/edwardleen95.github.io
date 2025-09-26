// ========== Dark Mode Theme Toggle ==========

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    
    // Add transition class
    body.classList.add('theme-transition');
    
    // Change theme
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcon(theme);
    
    // Remove transition class after animation
    setTimeout(() => {
        body.classList.remove('theme-transition');
    }, 300);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Add theme transition styles
const style = document.createElement('style');
style.textContent = `
    .theme-transition,
    .theme-transition *,
    .theme-transition *:before,
    .theme-transition *:after {
        transition: all 0.3s !important;
        transition-delay: 0 !important;
    }
`;
document.head.appendChild(style);