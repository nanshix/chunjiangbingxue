/**
 * 春江冰雪乐园 - Main JavaScript
 * Snow falling effect and interactive features
 */

// ============================================
// SNOW FALLING EFFECT
// ============================================
function initSnowfall() {
  const container = document.getElementById('snowflakes');
  if (!container) return;

  // Clear existing snowflakes
  container.innerHTML = '';

  // Reduce snowflakes on mobile for better performance
  const isMobile = window.innerWidth <= 768;
  const count = isMobile ? 15 : 40; // Fewer snowflakes on mobile
  const symbols = ['❄', '❅', '❆', '·', '*', '•'];

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    
    // Random properties
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const left = Math.random() * 100;
    const size = 0.8 + Math.random() * 1.5;
    const duration = 4 + Math.random() * 8;
    const delay = Math.random() * 8;
    const opacity = 0.3 + Math.random() * 0.7;

    // Apply styles
    flake.textContent = symbol;
    flake.style.left = left + 'vw';
    flake.style.fontSize = size + 'em';
    flake.style.animationDuration = duration + 's';
    flake.style.animationDelay = delay + 's';
    flake.style.opacity = opacity;

    container.appendChild(flake);
  }
}

// Alternative CSS-based snow for better performance
function initCSSSnow() {
  const container = document.getElementById('snowflakes');
  if (!container) return;

  container.innerHTML = '';
  const count = 30;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake-css');
    
    const size = 4 + Math.random() * 6;
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 12;
    const delay = Math.random() * -20;

    flake.style.width = size + 'px';
    flake.style.height = size + 'px';
    flake.style.left = left + '%';
    flake.style.animationDuration = duration + 's';
    flake.style.animationDelay = delay + 's';
    flake.style.opacity = 0.4 + Math.random() * 0.4;

    container.appendChild(flake);
  }
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Scroll effect for navbar
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      mobileMenuBtn.textContent = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
      });
    });
  }

  // Active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
// ACTIVITY TABS (for attractions page)
// ============================================
function initActivityTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update content
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === targetId) {
          content.classList.add('active');
        }
      });
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.activity-card, .feature-item, .pricing-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Add animation class styles dynamically
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// ============================================
// FORM VALIDATION
// ============================================
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '';
        }
      });

      if (isValid) {
        // Show success message
        showNotification('提交成功！我们会尽快与您联系。', 'success');
        form.reset();
      } else {
        showNotification('请填写所有必填项', 'error');
      }
    });
  });
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 2rem;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#0ea5e9'};
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification animations
function addNotificationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
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
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    hero.style.backgroundPositionY = rate + 'px';
  });
}

// ============================================
// LOADING SCREEN
// ============================================
function initLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = '<div class="loader-content">❄️ 加载中...</div>';
  loader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0B3D91 0%, #001A33 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  `;
  
  const loaderContent = loader.querySelector('.loader-content');
  loaderContent.style.cssText = `
    color: white;
    font-size: 1.5rem;
    animation: pulse 1.5s ease-in-out infinite;
  `;

  document.body.appendChild(loader);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      setTimeout(() => loader.remove(), 500);
    }, 500);
  });
}

// ============================================
// GALLERY LIGHTBOX
// ============================================
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Simple lightbox effect
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      
      const content = document.createElement('div');
      content.innerHTML = item.innerHTML;
      content.style.cssText = `
        transform: scale(0.8);
        transition: transform 0.3s ease;
        font-size: 8rem;
      `;
      
      lightbox.appendChild(content);
      document.body.appendChild(lightbox);
      
      // Animate in
      requestAnimationFrame(() => {
        lightbox.style.opacity = '1';
        content.style.transform = 'scale(1)';
      });
      
      // Close on click
      lightbox.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        content.style.transform = 'scale(0.8)';
        setTimeout(() => lightbox.remove(), 300);
      });
    });
  });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initSnowfall();
  initNavigation();
  initActivityTabs();
  addAnimationStyles();
  initScrollAnimations();
  addNotificationStyles();
  initFormValidation();
  initSmoothScroll();
  initParallax();
  initGallery();
  
  // Uncomment to enable loader
  // initLoader();
});

// Handle resize - but only reinitialize snow on actual width changes
// (Mobile browsers trigger resize when URL bar shows/hides, causing refresh loops)
let lastWidth = window.innerWidth;
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Only reinitialize if width actually changed significantly
    const newWidth = window.innerWidth;
    if (Math.abs(newWidth - lastWidth) > 50) {
      initSnowfall();
      lastWidth = newWidth;
    }
  }, 250);
});

// Pause snow on tab hidden for performance
document.addEventListener('visibilitychange', () => {
  const snowflakes = document.querySelectorAll('.snowflake, .snowflake-css');
  snowflakes.forEach(flake => {
    flake.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
});
