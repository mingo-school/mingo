/* =========================================
   НАВІГАЦІЯ: dropdown "Формати"
   ========================================= */
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector("#dropdownBtn");

dropdownBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("active");
});

document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});

const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
dropdownLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        dropdown.classList.remove("active");
    });
});

/* =========================================
   МОБІЛЬНЕ МЕНЮ (гамбургер)
   ========================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMobileMenu() {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Закриваємо меню після кліку на будь-яке посилання
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMobileMenu);
    });

    // Закриваємо при кліку поза меню (але не на dropdown-кнопку)
    document.addEventListener("click", function (event) {
        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMobileMenu();
        }
    });

    // Закриваємо при зміні розміру вікна на десктоп
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1024) closeMobileMenu();
    });
}

/* =========================================
   АНІМАЦІЯ З ПРАПОРАМИ
   ========================================= */
const FLAGS = [
    'img/flags/s.png',
    'img/flags/g.png',
    'img/flags/a.png',
    'img/flags/k.png',
    'img/flags/t.png',
    'img/flags/e.png',
];

document.querySelectorAll('.pattern-circle').forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        const randomFlag = FLAGS[Math.floor(Math.random() * FLAGS.length)];
        circle.style.setProperty('--hover-img', `url('${randomFlag}')`);
    });
});