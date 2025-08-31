document.addEventListener("DOMContentLoaded", () => {
  const cta = document.getElementById("cta");
  const msg = document.getElementById("msg");
  const themeToggle = document.getElementById("themeToggle");

  cta.addEventListener("click", () => {
    msg.textContent = "Thanks — this site is ready to deploy to AWS Amplify.";
  });

  // simple theme toggle persisted in localStorage
  const current = localStorage.getItem("theme");
  if (current === "dark") document.body.classList.add("dark");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
