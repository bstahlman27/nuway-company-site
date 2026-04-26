if (!window._formInit){
    window._formInit = true;

    emailjs.init('_SIgm4WmwcPS0GGKV');

    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = document.querySelector('.form-submit');
        btn.textContent = 'Sending...';
        btn.disabled = true;

        emailjs.sendForm('nuway-site-contact-form', 'template_fg1f5v7', this).then(() => {
            btn.textContent = 'Sent!';
            this.reset();
        }).catch(() => {
            btn.textContent = 'Failed — Try Again';
            btn.disabled = false;
        });
    });
}