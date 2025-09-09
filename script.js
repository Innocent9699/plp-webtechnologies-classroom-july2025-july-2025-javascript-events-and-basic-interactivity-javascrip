// ========== Part 1: Basic Event Handling ==========

// Show welcome message when button is clicked
document.getElementById("welcomeBtn").addEventListener("click", () => {
  document.getElementById("welcomeMsg").textContent = "Hello! You clicked the button.";
});

// ========== Part 2: Interactive Elements ==========

// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible FAQ Section
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});

// ========== Part 3: Form Validation ==========

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting by default

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let messages = [];
  let isValid = true;

  // Name validation: at least 2 characters
  if (name.length < 2) {
    messages.push("Name must be at least 2 characters long.");
    isValid = false;
  }

  // Email validation: basic regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messages.push("Please enter a valid email address.");
    isValid = false;
  }

  // Password validation: at least 6 characters
  if (password.length < 6) {
    messages.push("Password must be at least 6 characters long.");
    isValid = false;
  }

  const formMessage = document.getElementById("formMessage");
  if (isValid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    // Optionally, reset form fields
    this.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.innerHTML = messages.join("<br>");
  }
});
