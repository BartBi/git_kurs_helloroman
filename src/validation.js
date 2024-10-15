function validateEmail(email) {
    // Define a more comprehensive regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Reset error message
    errorMessage.style.display = 'none';

    // Name validation
    if (name === "") {
        errorMessage .textContent = "Proszę podać swoje imię.";
        errorMessage.style.display = 'block';
        return false;
    }

    // Email validation
    if (!validateEmail(email)) {
        errorMessage.textContent = "Proszę podać prawidłowy adres e-mail.";
        errorMessage.style.display = 'block';
        return false;
    }

    // Message validation
    if (message === "") {
        errorMessage.textContent = "Proszę wpisać wiadomość.";
        errorMessage.style.display = 'block';
        return false;
    }

    // If everything is valid, submit the form
    return true;
}
