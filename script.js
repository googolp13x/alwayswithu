console.log("Скрипт загружен!");
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
            console.log(entry); // Проверка, что блоки появляются в области видимости
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);
    pages.forEach(page => observer.observe(page));
    // Добавляем сердечки
    const heartsContainer = document.createElement("div");
    heartsContainer.style.position = "fixed";
    heartsContainer.style.top = "0";
    heartsContainer.style.left = "0";
    heartsContainer.style.width = "100%";
    heartsContainer.style.height = "100%";
    heartsContainer.style.pointerEvents = "none"; // Чтобы сердечки не мешали кликам
    document.body.appendChild(heartsContainer);
    const heartColors = ["#ff6b6b", "#ff8e8e", "#ffaaaa", "#ffcccc"]; // Разные цвета сердечек
    for (let i = 0; i < 20; i++) { // Увеличим количество сердечек
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`; // Разная задержка анимации
        heart.style.fontSize = `${Math.random() * 20 + 16}px`; // Разный размер
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)]; // Случайный цвет
        heartsContainer.appendChild(heart);
    }
    // Анимация при клике на сердечки
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("heart")) {
            event.target.style.opacity = "0";
            setTimeout(() => event.target.remove(), 500); // Удаляем сердечко через 0.5 секунды
        }
    });
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
