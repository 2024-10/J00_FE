document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const signupButton = document.getElementById('signup-button');
    const inputs = form.querySelectorAll('input');

    function checkFormValidity() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        if (allFilled) {
            signupButton.disabled = false;
            signupButton.classList.add('enabled');
            signupButton.classList.remove('disabled');
        } else {
            signupButton.disabled = true;
            signupButton.classList.add('disabled');
            signupButton.classList.remove('enabled');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
    });

    form.addEventListener('submit', function(event) {
        if (signupButton.classList.contains('enabled')) {
            event.preventDefault();
            window.location.href = 'sign_in.html';
        } else {
            event.preventDefault();
        }
    });
});
