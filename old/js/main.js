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
