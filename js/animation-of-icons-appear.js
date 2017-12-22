// Анимация появления иконок блоков
const images = document.querySelectorAll('.animateMe');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animationAct');
        } else {
            entry.target.classList.remove('animationAct');
        }
    });
});

images.forEach(image => {
    observer.observe(image);
});