const menuBtn = document.querySelector('.menu-btn');
const icon = menuBtn.querySelector('i');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.log('Ошибка загрузки страницы:', error));
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}