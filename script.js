document.addEventListener('DOMContentLoaded', () => {
    const bubbleContainer = document.getElementById('bubble-container');
    
    // Function to create bubbles
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size between 10px and 80px
        const size = Math.random() * 70 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random horizontal position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Random duration between 4s and 10s
        const duration = Math.random() * 6 + 4;
        bubble.style.setProperty('--duration', `${duration}s`);
        
        // Add to container
        bubbleContainer.appendChild(bubble);
        
        // Remove bubble after animation ends
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Create bubbles periodically
    setInterval(createBubble, 500);

    // Smooth scroll for nav links (redundant with CSS but good for older browser support/custom logic)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
