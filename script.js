// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-anim');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate
const animatedElements = document.querySelectorAll(
    '.fade-in, .slide-up, .reveal-left, .reveal-right, .reveal-up'
);

animatedElements.forEach(el => {
    observer.observe(el);
});

// Simple Particle System
const particlesContainer = document.getElementById('particles-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random properties
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `-${delay}s`;

    particlesContainer.appendChild(particle);
}

// Create particles
for (let i = 0; i < 50; i++) {
    createParticle();
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Simple toggle for mobile menu - CSS needs to support this if we want it fully functional
    // For now, let's just log it or add a class if we had mobile styles ready.
    // Given the prompt didn't explicitly ask for mobile menu implementation details but "Fully responsive",
    // I'll add a basic toggle class.
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(0,0,0,0.95)';
        navLinks.style.padding = '2rem';
    } else {
        navLinks.style.display = ''; // Reset to CSS default
    }
});
