setTimeout(() => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    if (window.matchMedia('(max-width: 768px)').matches){
        const stepCards = document.querySelectorAll('.step-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const desc = entry.target.querySelector('.step-desc');
                if (!desc) return;

                if (entry.isIntersecting) {
                    desc.style.maxHeight = '500px';
                    desc.style.opacity = '1';
                    desc.style.marginTop='0.5rem';
                    entry.target.style.border = '2px solid rgb(177, 10, 10)';
                } else {
                    desc.style.maxHeight = '0';
                    desc.style.opacity = '0';
                    desc.style.marginTop = '0';
                    entry.target.style.border = '1px solid rgb(121, 195, 238)';
                }
            });
        }, {
            threshold: 0,
            rootMargin: '-10% 0px -55% 0px'
        });

        stepCards.forEach(card => observer.observe(card));
    }
}, 100);