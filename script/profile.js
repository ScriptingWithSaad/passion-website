// Check login status on page load
window.onload = function() {
    checkLoginStatus();
};

function checkLoginStatus() {
    // Check if the user is logged in using localStorage
    if (localStorage.getItem('isLoggedIn')) {
        showProfileSection();
    } else {
        showAuthButtons();
    }
}

// Show authentication buttons if not logged in
function showAuthButtons() {
    document.getElementById('auth-buttons').style.display = 'block';
    document.getElementById('sign-in-section').style.display = 'none';
    document.getElementById('sign-up-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'none';
}

// Display sign-in form
function showSignInForm() {
    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('sign-in-section').style.display = 'block';
    document.getElementById('sign-up-section').style.display = 'none';
}

// Display sign-up form
function showSignUpForm() {
    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('sign-in-section').style.display = 'none';
    document.getElementById('sign-up-section').style.display = 'block';
}

// Show profile section if logged in
function showProfileSection() {
    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('sign-in-section').style.display = 'none';
    document.getElementById('sign-up-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    document.getElementById('user-email').textContent = email;
    updatePasswordDisplay(password);
}

// Handle sign-in process
function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    // Validate credentials using localStorage for this example
    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
        localStorage.setItem('isLoggedIn', 'true');
        showProfileSection();
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Validate if the email is a valid Gmail address
function isValidGmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}

// Handle sign-up process
function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (!isValidGmail(email)) {
        alert('Please use a valid Gmail address (example@gmail.com).');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Save credentials in localStorage for this example
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    // Show sign-in form with pre-filled email after sign-up
    showSignInForm();
    document.getElementById('signin-email').value = email;
    document.getElementById('signin-password').value = ''; // Clear password field for security
    alert('Sign up successful! Please sign in with your new credentials.');
}

// Handle logout process
function logout() {
    localStorage.removeItem('isLoggedIn');
    showAuthButtons();
}

// Display password as asterisks
function updatePasswordDisplay(password) {
    const asterisks = '*'.repeat(password.length);
    document.getElementById('user-password').textContent = asterisks;
    document.getElementById('user-password').setAttribute('data-password', password);
}

// Toggle password visibility on the profile page
function togglePassword() {
    const passwordElement = document.getElementById('user-password');
    const currentPassword = passwordElement.getAttribute('data-password');
    if (passwordElement.textContent.includes('*')) {
        passwordElement.textContent = currentPassword;
    } else {
        updatePasswordDisplay(currentPassword);
    }
}

// Toggle display of change password section
function toggleChangePassword() {
    const changePasswordContainer = document.getElementById('change-password-container');
    if (changePasswordContainer.style.display === 'none') {
        changePasswordContainer.style.display = 'block';
    } else {
        changePasswordContainer.style.display = 'none';
        // Clear inputs and message when hiding
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
        document.getElementById('change-password-message').style.display = 'none';
    }
}

// Handle password change process
function changePassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageElement = document.getElementById('change-password-message');

    if (newPassword === confirmPassword) {
        localStorage.setItem('password', newPassword);
        updatePasswordDisplay(newPassword);
        messageElement.textContent = 'Password changed successfully!';
        messageElement.style.color = 'green';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
    } else {
        messageElement.textContent = 'Passwords do not match!';
        messageElement.style.color = 'red';
    }
    messageElement.style.display = 'block';
}

// Toggle password visibility for sign-in or sign-up forms
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '👁️‍🗨️';
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '👁️';
    }
}
