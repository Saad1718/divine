// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("show");
    });
}

// Page load effect
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Section animation on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));

//  hero slider 
const slides = document.querySelectorAll(".hero-slide");
let current = 0;

/* Auto slide */
setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 6000);

/* Mouse move parallax (image + content feel alive) */
document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.clientX) / 60;
    const y = (window.innerHeight / 2 - e.clientY) / 60;

    const activeSlide = document.querySelector(".hero-slide.active");
    const activeContent = document.querySelector(".hero-slide.active .hero-content");

    if (activeSlide) {
        activeSlide.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
    }

    if (activeContent) {
        activeContent.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// journey
// const slides = document.querySelectorAll(".bg-slide");
// let i = 0;

// setInterval(() => {
//     slides[i].classList.remove("active");
//     i = (i + 1) % slides.length;
//     slides[i].classList.add("active");
// }, 6000);

// testimonial

let testiIndex = 0;
const testiCards = document.querySelectorAll(".testi-card");

function showTesti(i) {
    testiCards.forEach(card => card.classList.remove("active"));
    testiCards[i].classList.add("active");
}

function nextTesti() {
    testiIndex = (testiIndex + 1) % testiCards.length;
    showTesti(testiIndex);
}

function prevTesti() {
    testiIndex = (testiIndex - 1 + testiCards.length) % testiCards.length;
    showTesti(testiIndex);
}








