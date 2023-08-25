function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    if (theme === 'dark') {
        document.getElementById('color-icon').className = "bi bi-moon-stars-fill";
    } else {
        document.getElementById('color-icon').className = "bi bi-sun";
    }
}

function toggleTheme() {
    let theme = localStorage.getItem("theme");
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    setTheme(theme);
    localStorage.setItem("theme", theme);
}

document.getElementById('color-toggle').addEventListener('click', toggleTheme);

let theme = localStorage.getItem("theme");
setTheme(theme);