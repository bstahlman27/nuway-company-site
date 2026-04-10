function toggleReview(btn) {
    const body = btn.previousElementSibling;
    body.classList.toggle('expanded');
    btn.textContent = body.classList.contains('expanded') ? 'Read less' : 'Read more';
}

document.querySelectorAll('.review-body').forEach(body => {
    if (body.scrollHeight <= 200) {
        body.nextElementSibling.style.display = 'none';
        body.querySelector('.review-fade').style.display = 'none';
    }
});