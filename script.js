window.addEventListener('scroll', function() {
    const infos = ['info-1', 'info-2', 'info-3', 'info-4', 'info-5', 'info-6', 'info-7', 'info-8', 'info-9', 'info-10', 'info-11', 'info-12'];

    infos.forEach(function(id) {
        const element = document.getElementById(id);
        if (!element) return;

        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = "1";
        } else {
            element.style.opacity = "0";
        }
    });
});
