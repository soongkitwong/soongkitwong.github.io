(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const year = document.querySelector("#year");
  const copyButton = document.querySelector("[data-copy-email]");
  const copyStatus = document.querySelector("#copy-status");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (copyButton && copyStatus) {
    copyButton.addEventListener("click", async () => {
      const email = copyButton.getAttribute("data-copy-email");
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = "Email copied.";
      } catch {
        copyStatus.textContent = "Copy failed. Select the address manually.";
      }
    });
  }

  const sectionIds = ["about", "research", "teaching", "cv", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const links = Array.from(document.querySelectorAll(".nav-links a"));

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
        });
      },
      {
        rootMargin: "-24% 0px -62% 0px",
        threshold: [0.08, 0.2, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
