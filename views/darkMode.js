document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("toggleDarkMode");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
