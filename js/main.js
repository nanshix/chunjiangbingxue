// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Create animated snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Create snowflakes periodically
setInterval(createSnowflake, 300);

// Add neon glow to text elements
document.querySelectorAll('h1, h2').forEach(element => {
    if (element.classList.contains('neon-text')) return;
    element.classList.add('neon-text');
});

// Add pulse effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.classList.add('pulse');
    setInterval(() => {
        button.classList.toggle('pulse');
    }, 3000);
});

// Contact form validation (if present)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const name = document.querySelector('input[name="name"]');
        const email = document.querySelector('input[name="email"]');
        const phone = document.querySelector('input[name="phone"]');

        if (!name.value || !email.value || !phone.value) {
            alert('请填写所有必填字段');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('请输入有效的邮箱地址');
            return;
        }

        // Phone validation (Chinese phone number)
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phoneRegex.test(phone.value)) {
            alert('请输入有效的手机号码');
            return;
        }

        // Form is valid
        alert('表单提交成功！我们会尽快与您联系。');
        contactForm.reset();
    });
}

// Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}