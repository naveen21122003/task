// Show Login Form
function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Show Signup Form
function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

// Signup Function
function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (username && password) {
        const user = { username, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Sign Up Successful! Please Login.");
        showLogin();
    } else {
        alert("Please fill in all fields.");
    }
}
 // Login Function
 function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
        alert("Login Successful!");
        window.location.href = "product.html"; // Redirect to products page
    } else {
        alert("Invalid Username or Password.");
    }
}