setTimeout(() => {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    document.querySelectorAll('nav a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
            link.classList.add('nav-active');
        }
    });
}, 100);