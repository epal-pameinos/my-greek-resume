const toggle = document.getElementById("themeToggle");
const body = document.body;

// Προεπιλογή: Dark Mode
toggle.checked = false;

toggle.addEventListener("change", () => {
  body.classList.toggle("light", toggle.checked);
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling down 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
