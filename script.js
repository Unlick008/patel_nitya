// Scroll reveal effect
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section, .hero");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Initialize hidden state
document.querySelectorAll("section, .hero").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 1s ease-out";
});
