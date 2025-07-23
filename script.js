document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("formMessage");

  // Clear previous message
  message.textContent = "";

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Mobile regex (10 digits)
  const mobileRegex = /^\d{10}$/;

  // Validation checks
  if (!name || !email || !mobile || !address) {
    message.textContent = "All fields are required.";
    return;
  }

  if (!emailRegex.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  if (!mobileRegex.test(mobile)) {
    message.textContent = "Please enter a valid 10-digit mobile number.";
    return;
  }

  // Success
  message.classList.remove("text-danger");
  message.classList.add("text-success");
  message.textContent = "Form submitted successfully!";

  // Optional: clear the form
  document.getElementById("contactForm").reset();
});
