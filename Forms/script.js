document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Select all input fields
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    // Reset errors
    document.querySelectorAll(".error-message").forEach(span => span.style.display = "none");
    document.querySelectorAll("input").forEach(input => input.classList.remove("error"));

    // Validation functions
    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.style.display = "block";
        input.classList.add("error");
        isValid = false;
    }

    if (firstName.value.trim() === "") {
        showError(firstName, "First Name is required");
    }

    if (lastName.value.trim() === "") {
        showError(lastName, "Last Name is required");
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Enter a valid email address");
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        showError(phone, "Enter a valid 10-digit phone number");
    }

    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
    }

    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
    }

    // Submit form if valid
    if (isValid) {
        alert("Registration Successful!");
        this.submit(); // Submit the form
    }
});

// Real-time validation
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function() {
        this.classList.remove("error");
        this.nextElementSibling.style.display = "none";
    });
});
