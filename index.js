document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 }); // Активируем анимацию, когда 10% блока видно

    pages.forEach(page => observer.observe(page));
});
