function validateForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value || !emailPattern.test(email.value)) {
    errorMessage.textContent = "Please enter a valid email.";
    errorMessage.style.display = "block";
    return false;
  }

  if (!password.value) {
    errorMessage.textContent = "Password cannot be empty.";
    errorMessage.style.display = "block";
    return false;
  }

  // Simulated successful login
  window.location.href = "admin-dashboard.html";
  return false;
}
