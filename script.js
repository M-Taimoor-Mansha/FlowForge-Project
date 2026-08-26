// --- Mobile menu toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const openIcon = document.getElementById('menu-icon-open');
const closeIcon = document.getElementById('menu-icon-close');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu-open');
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// --- Navbar scroll effect ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

// --- Dark/Light Mode Toggle ---
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleButton = document.getElementById('theme-toggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add('hidden');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
    localStorage.setItem('theme', 'light');
  }
}

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

if (savedTheme) {
  applyTheme(savedTheme);
} else if (systemPrefersDark) {
  applyTheme('dark');
} else {
  applyTheme('light');
}

themeToggleButton.addEventListener('click', () => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  applyTheme(isDarkMode ? 'light' : 'dark');
});

// --- Initialize Feather Icons ---
feather.replace();
