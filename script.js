// Добавляем сердечки
const heartsContainer = document.createElement("div");
heartsContainer.style.position = "fixed";
heartsContainer.style.top = "0";
heartsContainer.style.left = "0";
heartsContainer.style.width = "100%";
heartsContainer.style.height = "100%";
heartsContainer.style.pointerEvents = "none"; // Чтобы сердечки не мешали кликам
document.body.appendChild(heartsContainer);

const heartCount = 30; // Увеличим количество сердечек
const heartSize = 24; // Размер сердечек

for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}%`; // Случайное положение по горизонтали
    heart.style.top = `${Math.random() * 100}%`; // Случайное положение по вертикали
    heart.style.animationDelay = `${Math.random() * 5}s`; // Разная задержка анимации
    heart.style.fontSize = `${Math.random() * 10 + heartSize}px`; // Разный размер
    heart.style.color = "#ffffff"; // Белый цвет
    heartsContainer.appendChild(heart);
}

// Анимация при клике на сердечки
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("heart")) {
        event.target.style.opacity = "0";
        setTimeout(() => event.target.remove(), 500); // Удаляем сердечко через 0.5 секунды
    }
});
