document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simulate sending data to server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Show confirmation message
    document.getElementById('confirmation').innerText = "Thank you! Your message has been sent successfully.";
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
