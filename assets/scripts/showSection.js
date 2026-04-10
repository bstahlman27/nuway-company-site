function toggleService(detailId, card){
    const detail = document.getElementById(detailId);
    const isOpen = card.classList.contains('active');

    document.querySelectorAll('.service-detail').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.detail-inline').forEach(d => d.remove());

    if (isOpen) return;

    card.classList.add('active');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        const inline = document.createElement('div');
        inline.classList.add('detail-inline');
        inline.innerHTML = detail.innerHTML;
        card.after(inline);

        inline.querySelector('.detail-close')?.addEventListener('click', () => {
            inline.remove();
            card.classList.remove('active');
        });

        inline.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        detail.classList.add('open');
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function closeDetail(detailId) {
    document.getElementById(detailId).classList.remove('open');
    document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.detail-inline').forEach(d => d.remove());
}