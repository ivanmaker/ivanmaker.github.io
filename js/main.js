const modal = document.getElementById('contact-modal');
const openButtons = document.querySelectorAll('[data-open-contact]');
const closeButtons = document.querySelectorAll('[data-close-contact]');
const yearTarget = document.getElementById('year');

if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
}

function openContactModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeContactModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

openButtons.forEach((button) => {
    button.addEventListener('click', openContactModal);
});

closeButtons.forEach((button) => {
    button.addEventListener('click', closeContactModal);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeContactModal();
    }
});

const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');

let currentIndex = 0;
let autoRotate;

function renderSlide(index) {
    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === index);
        dot.setAttribute('aria-pressed', String(dotIndex === index));
    });

    currentIndex = index;
}

function goToSlide(index) {
    const nextIndex = (index + slides.length) % slides.length;
    renderSlide(nextIndex);
}

function startAutoRotate() {
    if (slides.length < 2) return;

    clearInterval(autoRotate);
    autoRotate = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 6000);
}

if (slides.length) {
    renderSlide(0);
    startAutoRotate();
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoRotate();
    });
}

if (nextButton) {
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoRotate();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        startAutoRotate();
    });
});
