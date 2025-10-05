/* ===== DOM MANIPULATION ===== */
// Add greeting message and enhance hero text readability
document.addEventListener("DOMContentLoaded", () => {
  const heroHeading = document.querySelector(".hero h2");
  const heroSubtext = document.querySelector(".hero p");
  const heroName = document.querySelector(".hero h2 span");

  // Keep your name color as original (white)
  if (heroName) {
    heroName.style.color = "#ffffff";
  }

  // Make hero text more readable and eye-pleasing
  if (heroHeading) {
    heroHeading.style.textShadow = "0 3px 8px rgba(0, 0, 0, 0.6)";
    heroHeading.style.color = "#ffffff";
  }
  if (heroSubtext) {
    heroSubtext.style.color = "#f2f2f2";
    heroSubtext.style.textShadow = "0 2px 6px rgba(0, 0, 0, 0.6)";
  }

  // Add greeting based on time
  const greet = document.createElement("p");
  const hour = new Date().getHours();
  greet.textContent =
    hour < 12
      ? "Good Morning! Have a wonderful day ahead."
      : hour < 18
      ? "Good Afternoon! Keep up the good work."
      : "Good Evening! Hope you had a peaceful day.";

  Object.assign(greet.style, {
    marginTop: "1rem",
    fontSize: "1.2rem",
    color: "#ffffff",
    textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
  });

  const heroSection = document.querySelector(".hero");
  if (heroSection) heroSection.appendChild(greet);
});

/* ===== EVENT HANDLING ===== */
// Subtle glow and zoom on profile picture hover
const profilePic = document.querySelector(".profile-pic");
if (profilePic) {
  profilePic.addEventListener("mouseover", () => {
    profilePic.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.7)";
    profilePic.style.transform = "scale(1.05)";
  });
  profilePic.addEventListener("mouseout", () => {
    profilePic.style.boxShadow = "0 6px 15px rgba(93, 63, 211, 0.3)";
    profilePic.style.transform = "scale(1)";
  });
}

/* ===== FORM VALIDATION ===== */
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      e.preventDefault();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    alert("Message sent successfully!");
  });
}

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* ===== THEME TOGGLE (Dark / Light Mode) ===== */
const footer = document.querySelector("footer");
if (footer) {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Dark Mode";
  Object.assign(toggleBtn.style, {
    background: "#fff",
    color: "#5D3FD3",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.5rem 1rem",
    marginLeft: "1rem",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.3s, color 0.3s",
  });
  footer.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    /* ===== DARK MODE ===== */
    if (document.body.classList.contains("dark-mode")) {
      document.body.style.background = "#181820";
      document.body.style.color = "#EAEAEA";
      footer.style.background = "#3A1C8C";
      toggleBtn.textContent = "Light Mode";
      toggleBtn.style.background = "#3A1C8C";
      toggleBtn.style.color = "#fff";

      document.querySelectorAll("h1, h2, h3, p, li, label, span").forEach(el => {
        el.style.color = "#EAEAEA";
      });
      document.querySelectorAll("a").forEach(link => {
        link.style.color = "#C8B6FF";
      });
      document.querySelectorAll("section h2").forEach(h2 => {
        h2.style.color = "#CFC7FF";
      });
      document.querySelectorAll(
        ".skills-grid li, .education-list li, .projects-list li"
      ).forEach(card => {
        card.style.background = "#242433";
        card.style.color = "#F0F0F0";
        card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
      });
      const form = document.querySelector("#contact form");
      if (form) form.style.background = "#242433";
      document.querySelectorAll("#contact input, #contact textarea").forEach(field => {
        field.style.background = "#2D2D3A";
        field.style.color = "#F5F5F5";
        field.style.border = "1px solid #888";
      });
      const submitBtn = document.querySelector("#contact button");
      if (submitBtn) {
        submitBtn.style.background = "#5D3FD3";
        submitBtn.style.color = "#fff";
      }

      // Enhance hero readability in dark mode
      const heroHeading = document.querySelector(".hero h2");
      const heroSubtext = document.querySelector(".hero p");
      if (heroHeading) heroHeading.style.textShadow = "0 3px 8px rgba(0, 0, 0, 0.8)";
      if (heroSubtext) heroSubtext.style.textShadow = "0 2px 6px rgba(0, 0, 0, 0.7)";

    } else {
      /* ===== LIGHT MODE ===== */
      document.body.style.background = "#f8f6ff";
      document.body.style.color = "#333";
      footer.style.background = "#5D3FD3";
      toggleBtn.textContent = "Dark Mode";
      toggleBtn.style.background = "#fff";
      toggleBtn.style.color = "#5D3FD3";

      document.querySelectorAll("h1, h2, h3, p, li, label, span, a").forEach(el => {
        el.style.color = "";
      });
      document.querySelectorAll(
        ".skills-grid li, .education-list li, .projects-list li"
      ).forEach(card => {
        card.style.background = "#fff";
        card.style.color = "#333";
        card.style.boxShadow = "0 8px 20px rgba(93,63,211,0.25)";
      });
      const form = document.querySelector("#contact form");
      if (form) form.style.background = "#fff";
      document.querySelectorAll("#contact input, #contact textarea").forEach(field => {
        field.style.background = "#fff";
        field.style.color = "#333";
        field.style.border = "1px solid #ccc";
      });
      const submitBtn = document.querySelector("#contact button");
      if (submitBtn) {
        submitBtn.style.background = "#5D3FD3";
        submitBtn.style.color = "#fff";
      }

      // Restore hero readability for light mode too
      const heroHeading = document.querySelector(".hero h2");
      const heroSubtext = document.querySelector(".hero p");
      if (heroHeading) heroHeading.style.textShadow = "0 3px 8px rgba(0, 0, 0, 0.4)";
      if (heroSubtext) heroSubtext.style.textShadow = "0 2px 6px rgba(0, 0, 0, 0.4)";
    }
  });
}

/* ===== READ MORE / READ LESS FEATURE ===== */
// Dynamically shortens the About section text and lets the user expand it.
document.addEventListener("DOMContentLoaded", () => {
  const aboutText = document.querySelector(".about-text p");
  if (aboutText) {
    const fullText = aboutText.textContent.trim();
    const shortText = fullText.slice(0, 150) + "..."; // first 150 characters

    if (fullText.length > 150) {
      aboutText.textContent = shortText;

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Read More";
      Object.assign(toggleBtn.style, {
        display: "inline-block",
        marginTop: "1rem",
        background: "#5D3FD3",
        color: "#fff",
        border: "none",
        borderRadius: "0.5rem",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        fontWeight: "600",
        transition: "background 0.3s",
      });

      aboutText.parentElement.appendChild(toggleBtn);

      toggleBtn.addEventListener("click", () => {
        if (aboutText.textContent === shortText) {
          aboutText.textContent = fullText;
          toggleBtn.textContent = "Read Less";
        } else {
          aboutText.textContent = shortText;
          toggleBtn.textContent = "Read More";
        }
      });

      toggleBtn.addEventListener("mouseover", () => {
        toggleBtn.style.background = "#3A1C8C";
      });
      toggleBtn.addEventListener("mouseout", () => {
        toggleBtn.style.background = "#5D3FD3";
      });
    }
  }
});
