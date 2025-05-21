// === Email Form Handling ===
const emailForms = document.querySelectorAll(".email-form");

emailForms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      alert(`Thank you! A confirmation link will be sent to ${email}`);
      emailInput.value = ""; // Reset input
    } else {
      alert("Please enter a valid email address.");
    }
  });
});

// Email validation
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// === Slider Controls ===
const slider = document.getElementById("slider");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// Width to scroll per click (you can adjust this)
const scrollAmount = 1000;

leftArrow.addEventListener("click", () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

//FAQ Question section
function toggleFAQ(el) {
  const answer = el.nextElementSibling;
  const icon = el.querySelector(".icon");
  const isAlreadyOpen = answer.classList.contains("open");

  // If it's already open, just close it
  if (isAlreadyOpen) {
    answer.classList.remove("open");
    icon.textContent = "+";
  } else {
    // Close all other answers and reset their icons
    const allAnswers = document.querySelectorAll(".faq-answer");
    const allIcons = document.querySelectorAll(".faq-question .icon");

    allAnswers.forEach((ans) => ans.classList.remove("open"));
    allIcons.forEach((icn) => (icn.textContent = "+"));

    // Then open the clicked one
    answer.classList.add("open");
    icon.textContent = "✕";
  }
}

//for the toggledropdown
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

window.onclick = function (event) {
  const selector = document.querySelector(".language-selector");
  if (!selector.contains(event.target)) {
    document.getElementById("dropdown").style.display = "none";
  }
};
