document.getElementById("exploreButton").addEventListener("click", function() {
    window.location.href = "events.html";
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 4000);

let users = JSON.parse(localStorage.getItem('users')) || [];

function showSignUp() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('signup-error-message').style.display = 'none';
}

function showSignIn() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('sign-in-form').style.display = 'block';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('error-message').style.display = 'none';
}

function showOptions() {
    document.getElementById('form-container').style.display = 'none';
}

function signUp(event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!email.endsWith('@gmail.com')) {
        document.getElementById('signup-error-message').textContent = 'You must use a Gmail account.';
        document.getElementById('signup-error-message').style.display = 'block';
        return false;
    }

    if (users.some(user => user.email === email)) {
        document.getElementById('signup-error-message').textContent = 'This email is already registered.';
        document.getElementById('signup-error-message').style.display = 'block';
        return false;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Please sign in.');
    showSignIn();

    return false;
}

function signIn(event) {
    event.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        document.getElementById('modal').style.display = 'none';
    } else {
        document.getElementById('error-message').textContent = 'Invalid email or password. Please try again.';
        document.getElementById('error-message').style.display = 'block';
    }
}

window.onload = function() {
    if (!localStorage.getItem('isLoggedIn')) {
        document.getElementById('modal').style.display = 'block';
    }
};

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};
