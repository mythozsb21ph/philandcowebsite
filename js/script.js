// Page load animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on page load
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
    });

    // Animate buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.animation = `fadeInScale 0.6s ease-out ${0.5 + index * 0.1}s forwards`;
    });

    // Animate navigation items
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `slideInLeft 0.5s ease-out ${0.2 + index * 0.05}s forwards`;
    });

    // Animate form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input, index) => {
        input.style.opacity = '0';
        input.style.animation = `fadeInUp 0.6s ease-out ${1 + index * 0.1}s forwards`;
    });
});

// Hamburger menu toggle



const hamburger = document.querySelector('.hamburger');
const navCenter = document.querySelector('.nav-center');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navCenter.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu after click
        if (navCenter) {
            navCenter.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking on page navigation links
document.querySelectorAll('a[href*=".html"]').forEach(link => {
    link.addEventListener('click', () => {
        if (navCenter) {
            navCenter.classList.remove('active');
        }
    });
});

// Click animations for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Remove old ripple if exists
        const oldRipple = this.querySelector('.ripple');
        if (oldRipple) oldRipple.remove();

        this.appendChild(ripple);

        // Add click animation
        this.classList.add('btn-clicked');
        setTimeout(() => this.classList.remove('btn-clicked'), 600);
    });
});

// Click animation for links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        this.classList.add('link-clicked');
        setTimeout(() => this.classList.remove('link-clicked'), 500);
    });
});

// Click animation for form inputs
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.classList.add('input-focused');
    });

    input.addEventListener('blur', function () {
        this.classList.remove('input-focused');
    });
});

// Form submission
// Note: Some pages use an external form service (formsubmit.co).
// This script must NOT block those real submissions.
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    // If the form is using formsubmit.co, allow the browser to submit normally.
    const action = (form.getAttribute('action') || '').trim();
    const usesFormSubmit = action.includes('formsubmit.co');

    if (usesFormSubmit) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.classList.add('btn-loading');
            submitBtn.disabled = true;
        }

        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
            if (submitBtn) {
                submitBtn.classList.remove('btn-loading');
                submitBtn.disabled = false;
            }
        }, 1500);
    });
});

