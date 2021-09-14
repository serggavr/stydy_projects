const slides = document.querySelectorAll('.slide');
const container = document.getElementsByClassName('container');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
        setBackgroundColor();
    });
}

function clearActiveClasses () {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

function setBackgroundColor() {
    container[0].style.backgroundColor = window.getComputedStyle(document.querySelector('.active')).backgroundColor;

}
setBackgroundColor();