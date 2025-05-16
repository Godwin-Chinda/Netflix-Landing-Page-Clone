
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
