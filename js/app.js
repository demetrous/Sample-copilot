document.addEventListener("DOMContentLoaded", () => {
  const cta = document.getElementById("cta");
  const msg = document.getElementById("msg");
  const themeToggle = document.getElementById("themeToggle");

  // CTA shows a quick tip to use the contact form
  cta.addEventListener("click", () => {
    msg.textContent = "Use the contact form below to send a message.";
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  });

  // simple theme toggle persisted in localStorage
  const current = localStorage.getItem("theme");
  if (current === "dark") document.body.classList.add("dark");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Contact form handling: try mailto, otherwise show prepared message
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const clearBtn = document.getElementById("clearForm");

  function encodeBody(fields) {
    return Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Preparing message...";
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim() || "Message from portfolio site",
      message: form.message.value.trim(),
    };

    const body = encodeURIComponent(encodeBody(data));
    const mailto = `mailto:dmitrii.karaulanov@example.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${body}`;

    // Try to open the user's mail client. This is best-effort for static sites.
    const opened = (window.location.href = mailto);
    // Show inline feedback
    formStatus.textContent =
      "If your email client did not open, copy the message and send it to dmitrii.karaulanov@example.com.";
  });

  clearBtn.addEventListener("click", () => {
    form.reset();
    formStatus.textContent = "";
  });
});
