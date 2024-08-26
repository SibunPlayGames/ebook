document.querySelectorAll('.transition-link').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('data-href');

        document.body.classList.add('slide-out');

        setTimeout(() => {
            if (href) {
                window.location.href = href;
            }
        }, 800); // Match this with the transition duration in CSS
    });
});

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        document.body.classList.remove('slide-out');
    }
});