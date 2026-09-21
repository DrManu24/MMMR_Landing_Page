(function () {
    const nav = document.getElementById('nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const desktopQuery = window.matchMedia('(min-width: 992px)');

    if (nav && menuToggle) {
        function setMenuOpen(isOpen) {
            nav.classList.toggle('nav-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        }

        function closeMenu() {
            setMenuOpen(false);
        }

        menuToggle.addEventListener('click', function () {
            setMenuOpen(!nav.classList.contains('nav-open'));
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });

        function handleViewportChange(event) {
            if (event.matches) {
                closeMenu();
            }
        }

        desktopQuery.addEventListener('change', handleViewportChange);
    }
})();

(function () {
    if (typeof particlesJS === 'undefined' || !document.getElementById('bg-pattern')) {
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    particlesJS('bg-pattern', {
        particles: {
            number: {
                value: isMobile ? 40 : 65,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: '#4c3d3d'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.4,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: isMobile ? 120 : 155,
                color: '#4c3d3d',
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'bounce'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                },
                resize: true
            }
        },
        retina_detect: true
    });
})();
