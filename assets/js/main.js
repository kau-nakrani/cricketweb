const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links ul');
const body = document.body; // Reference to body

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
    body.classList.toggle('nav-open'); // Add/remove class to body to disable scroll
});