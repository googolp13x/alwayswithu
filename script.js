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
});
