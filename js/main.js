/**
 * Nancy Ziegler Gallery - Main JavaScript
 */

(function() {
    'use strict';

    // Smooth scroll for nav links (fallback for browsers without CSS smooth scroll)
    function initSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Touch support for flip cards on mobile devices
    function initTouchFlip() {
        const cards = document.querySelectorAll('.art-card');

        cards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                // On touch devices, toggle the flipped class
                if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                    // Close any other open cards
                    cards.forEach(function(otherCard) {
                        if (otherCard !== card) {
                            otherCard.classList.remove('flipped');
                        }
                    });

                    // Toggle this card
                    card.classList.toggle('flipped');
                }
            });
        });

        // Close flipped cards when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.art-card')) {
                cards.forEach(function(card) {
                    card.classList.remove('flipped');
                });
            }
        });
    }

    // Form submission handling
    function initFormHandling() {
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('form-success');

        if (form && successMessage) {
            form.addEventListener('submit', function(e) {
                // Let Formspree handle the actual submission
                // This provides visual feedback after redirect back

                // Check if we're returning from a successful submission
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.has('submitted')) {
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                }
            });
        }

        // Check on page load if returning from Formspree
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('submitted') || window.location.hash === '#thank-you') {
            const form = document.getElementById('contact-form');
            const successMessage = document.getElementById('form-success');
            if (form && successMessage) {
                form.style.display = 'none';
                successMessage.style.display = 'block';

                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    setTimeout(function() {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }
        }
    }

    // Scroll parallax for clouds (fallback for browsers without animation-timeline support)
    function initCloudParallax() {
        // Check if browser supports scroll-driven animations
        if (CSS.supports('animation-timeline', 'scroll()')) {
            return; // Use CSS animation instead
        }

        const clouds = document.querySelectorAll('.cloud');
        if (clouds.length === 0) return;

        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

            // Move clouds at different rates
            clouds.forEach(function(cloud, i) {
                const rate = (i + 1) * 15;
                const direction = i % 2 === 0 ? 1 : -1;
                cloud.style.transform = 'translateX(' + (progress * rate * direction) + 'vw)';
            });
        }, { passive: true });
    }

    // Initialize all functionality when DOM is ready
    function init() {
        initSmoothScroll();
        initTouchFlip();
        initFormHandling();
        initCloudParallax();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
