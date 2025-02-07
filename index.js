document.addEventListener("DOMContentLoaded", function() {
    // Анимация загрузки страницы
    document.body.style.opacity = "1";

    // Анимация появления блоков
    const pages = document.querySelectorAll(".page");
    const paragraphs = document.querySelectorAll(".text p");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 }); // Активируем анимацию, когда 10% блока видно

    pages.forEach(page => observer.observe(page));
    paragraphs.forEach(p => observer.observe(p));

    // Добавляем сердечки
    const heartsContainer = document.createElement("div");
    heartsContainer.style.position = "fixed";
    heartsContainer.style.top = "0";
    heartsContainer.style.left = "0";
    heartsContainer.style.width = "100%";
    heartsContainer.style.height = "100%";
    heartsContainer.style.pointerEvents = "none"; // Чтобы сердечки не мешали кликам
    document.body.appendChild(heartsContainer);

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heartsContainer.appendChild(heart);
    }
});
