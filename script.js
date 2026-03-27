const scrollTopButton = document.getElementById("scrollTop");

function toggleScrollTopButton() {
  const shouldShow = window.scrollY > 360;
  scrollTopButton.classList.toggle("visible", shouldShow);
}

window.addEventListener("scroll", toggleScrollTopButton, { passive: true });

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

toggleScrollTopButton();
