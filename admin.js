// ===== LOGIN VALIDATION (optional) =====
function validateForm(event) {
  // your login validation logic, if needed
}

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

  error.style.display = "none";
  alert("Signup successful!");
  return false;
}
