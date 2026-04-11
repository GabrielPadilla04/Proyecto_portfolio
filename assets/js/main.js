const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// 1. FUNCIÓN PARA APLICAR EL MODO
const applyTheme = (theme) => {
    if (theme === 'dark') {
        // Usamos add y remove en lugar de replace para evitar errores si la clase no existe aún
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        if (themeIcon) themeIcon.innerText = '☀️';
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        if (themeIcon) themeIcon.innerText = '🌙';
    }
};

// 2. AL CARGAR LA PÁGINA: Leer qué hay en la "memoria" del navegador
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// 3. AL HACER CLICK: Cambiar y guardar
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        // Determinamos el nuevo tema basándonos en la clase actual
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';

        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}