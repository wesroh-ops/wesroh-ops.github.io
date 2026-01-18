// 커서 블러 효과
let cursorBlur = null;

function initCursorBlur() {
    // 커서 블러 요소 생성
    cursorBlur = document.createElement('div');
    cursorBlur.className = 'cursor-blur';
    document.body.appendChild(cursorBlur);

    // 마우스 이동 이벤트
    document.addEventListener('mousemove', (e) => {
        if (cursorBlur) {
            cursorBlur.style.left = e.clientX + 'px';
            cursorBlur.style.top = e.clientY + 'px';
            cursorBlur.classList.add('active');
        }
    });

    // 마우스가 화면을 벗어날 때 블러 제거
    document.addEventListener('mouseleave', () => {
        if (cursorBlur) {
            cursorBlur.classList.remove('active');
        }
    });

    // 클릭 가능한 요소에서 블러 크기 조정
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .tab-button, .contact-button, .cta-button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorBlur) {
                cursorBlur.style.width = '1200px';
                cursorBlur.style.height = '1200px';
            }
        });
        el.addEventListener('mouseleave', () => {
            if (cursorBlur) {
                cursorBlur.style.width = '800px';
                cursorBlur.style.height = '800px';
            }
        });
    });
}

// Intersection Observer for Section Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize sections with fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    // 커서 블러 효과 초기화
    initCursorBlur();
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionsMap = {
        'about': '#about',
        'career': '#career',
        'skills': '#skills',
        'research': '#research',
        'lectures': '#lectures',
        'contact': '#contact'
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Scroll to section
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    const offset = 100; // Account for sidebar
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active nav link on scroll
    const updateActiveNav = () => {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial check

    // Hero section fade in
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Research items stagger animation
    const researchItems = document.querySelectorAll('.research-item');
    researchItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300);
    });

    // Skill category animation
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        setTimeout(() => {
            category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, 500);
    });

    // Job description list animation
    const jobDescriptions = document.querySelectorAll('.job-description li');
    jobDescriptions.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            item.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200);
    });

    // Contact button hover effect
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        contactButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // CTA button hover effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Logo hover animation
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    }

    // Smooth scroll for CTA button
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#contact');
            if (target) {
                const offset = 100;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add scroll reveal animation for elements
const revealElements = document.querySelectorAll('.job, .lecture-item');
revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    revealObserver.observe(el);
});
