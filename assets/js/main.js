const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// 1. FUNCIÓN PARA APLICAR EL MODO
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.replace('light-mode', 'dark-mode');
        if (themeIcon) themeIcon.innerText = '☀️';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        if (themeIcon) themeIcon.innerText = '🌙';
    }
};

// 2. AL CARGAR LA PÁGINA: Leer qué hay en la "memoria" del navegador
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// 3. AL HACER CLICK: Cambiar y guardar
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';

        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Aquí se guarda para las otras páginas
    });
}