// script.js

// Typewriter Animation
function typeWriter(element, text, delay) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Particle Generation System
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Scroll Animations
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
        const offset = element.offsetTop;
        if (scrollY > offset - window.innerHeight + 100) {
            element.classList.add('visible');
        }
    });
});

// Service Card Interactions
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});

// All interactive effects for cinematic portfolio
function initPortfolio() {
    const typewriterElement = document.querySelector('.typewriter');
    typeWriter(typewriterElement, 'Welcome to my cinematic portfolio!', 100);
    window.addEventListener('click', (e) => {
        createParticle(e.pageX, e.pageY);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', initPortfolio);