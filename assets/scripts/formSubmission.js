emailjs.init('PUBLIC KEY');

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.form-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    emailjs.sendForm('SERVICE ID', 'TEMPLATE ID', this).then(() => {
        btn.textContent = 'Sent!';
        this.reset();
    }).catch(() => {
        btn.textContent = 'Failed — Try Again';
        btn.disabled = false;
    });
});