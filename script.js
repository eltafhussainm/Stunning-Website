// Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.style.opacity = "1";
            reveal.style.transform = "translateY(0)";
        }
    });
});

// Simple mouse tracking effect for the blob
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob');
    blob.style.left = e.pageX + 'px';
    blob.style.top = e.pageY + 'px';
});
