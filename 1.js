document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const msgBox = document.getElementById('formMessage');
    msgBox.style.color = 'green';
    msgBox.textContent = 'Thank you ' + name + '! Your message has been received. We will get back to you soon.';

    console.log({ name, email, message });
});