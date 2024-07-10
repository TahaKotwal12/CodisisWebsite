document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contact-modal');
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    const closeBtn = document.querySelector('.close');

    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to your server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // You would replace this with actual SMTP logic on your server
        alert('Thank you for your message! We will get back to you soon.');
        modal.style.display = 'none';
        contactForm.reset();
    });
});