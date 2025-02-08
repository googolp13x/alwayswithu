document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM загружен!");

    // Анимация загрузки страницы
    document.body.style.opacity = "1";

    // Анимация появления блоков
    const pages = document.querySelectorAll(".page");

    const observerOptions = {
        threshold: 0.1, // Активируем анимацию, когда 10% блока видно
        rootMargin: "0px" // Отступ от области видимости
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    pages.forEach(page => observer.observe(page));

    // Анимация текста (появление параграфов с задержкой)
    const paragraphs = document.querySelectorAll(".text p");

    paragraphs.forEach((paragraph, index) => {
        paragraph.style.setProperty("--i", index + 1); // Устанавливаем задержку для каждого параграфа
    });

    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    paragraphs.forEach(p => textObserver.observe(p));

    // Функция для переключения языка
    function switchLanguage(lang) {
        // Скрываем все элементы с атрибутом data-lang
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.style.display = 'none';
        });

        // Показываем элементы с выбранным языком
        document.querySelectorAll(`[data-lang="${lang}"]`).forEach(element => {
            element.style.display = 'block';
        });

        // Обновляем активную кнопку
        document.querySelectorAll('.lang-button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`#lang-${lang}`).classList.add('active');
    }

    // Обработчики событий для кнопок
    document.getElementById('lang-ru').addEventListener('click', () => switchLanguage('ru'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));

    // Устанавливаем язык по умолчанию (русский)
    switchLanguage('ru');
});
