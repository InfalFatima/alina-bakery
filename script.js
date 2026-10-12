document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const topic = document.getElementById("topic").value;
      const message = document.getElementById("message").value.trim();

      const subject = encodeURIComponent("Joyful Bakes enquiry: " + topic);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\nTopic: " + topic + "\n\n" + message
      );

      const notice = document.getElementById("formNotice");
      notice.classList.remove("d-none");
      notice.textContent = "Your email app should open with your message prepared. Add the official Joyful Bakes email address before using this form live.";

      // Replace the placeholder below with the real project email before publishing.
      window.location.href = "mailto:hello@joyfulbakes.example?subject=" + subject + "&body=" + body;
    });
  }
});
