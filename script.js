// === Slider Controls ===
const slider = document.getElementById("slider");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// Width to scroll per click (you can adjust this)
const scrollAmount = 300;

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

//for the faq section
function toggleFAQ(el) {
  const answer = el.nextElementSibling;
  const icon = el.querySelector(".icon");

  answer.classList.toggle("open");
  icon.textContent = answer.classList.contains("open") ? "✕" : "+";
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
