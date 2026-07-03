// Добавление класса 'scrolled' к шапке при прокрутке
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Анимация плавного появления элементов (Scroll Reveal)
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Запускаем функцию при загрузке страницы и при скролле
window.addEventListener('scroll', reveal);
// Триггерим сразу, чтобы первый экран появился
reveal();

// Плавная прокрутка для ссылок в меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Мобильное меню (бургер)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerIcon = document.querySelector('.mobile-menu-btn i');
    
    navLinks.classList.toggle('active');
    
    // Меняем иконку (бургер на крестик)
    if (navLinks.classList.contains('active')) {
        burgerIcon.classList.remove('fa-bars');
        burgerIcon.classList.add('fa-xmark');
    } else {
        burgerIcon.classList.remove('fa-xmark');
        burgerIcon.classList.add('fa-bars');
    }
}

// Закрываем мобильное меню при клике на любую ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const burgerIcon = document.querySelector('.mobile-menu-btn i');
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burgerIcon.classList.remove('fa-xmark');
            burgerIcon.classList.add('fa-bars');
        }
    });
});
