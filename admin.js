// ===== SIGNUP VALIDATION =====
function validateSignupForm(event) {
  event.preventDefault();

  const email = document.getElementById("signup-email");
  const password = document.getElementById("signup-password");
  const confirmPassword = document.getElementById("confirm-password");
  const error = document.getElementById("signup-error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value || !emailPattern.test(email.value)) {
    error.textContent = "Please enter a valid email.";
    error.style.display = "block";
    return false;
  }

  if (!password.value) {
    error.textContent = "Password cannot be empty.";
    error.style.display = "block";
    return false;
  }

  if (password.value !== confirmPassword.value) {
    error.textContent = "Passwords do not match.";
    error.style.display = "block";
    return false;
  }

  // Save admin credentials to localStorage
  localStorage.setItem("adminEmail", email.value);
  localStorage.setItem("adminPassword", password.value);

  error.style.display = "none";
  alert("Signup successful! You can now log in.");
  window.location.href = "admin-login.html"; // Redirect after signup
  return false;
}

// ===== LOGIN VALIDATION =====
function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  const storedEmail = localStorage.getItem("adminEmail");
  const storedPassword = localStorage.getItem("adminPassword");

  if (!email.value || !password.value) {
    errorMessage.textContent = "Email and password are required.";
    errorMessage.style.display = "block";
    return false;
  }

  if (email.value === storedEmail && password.value === storedPassword) {
    errorMessage.style.display = "none";
    window.location.href = "admin-dashboard.html";
  } else {
    errorMessage.textContent = "Invalid login credentials.";
    errorMessage.style.display = "block";
  }

  return false;
}
