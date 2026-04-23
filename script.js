const header = document.querySelector(".site-header");
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = document.body.dataset.page;

if (header) {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 14);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (currentPage) {
  navLinks.forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (!reduceMotion && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  const messageBox = form.querySelector(".form-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent("Poptávka z webu BM Podlahy");
    const body = encodeURIComponent(
      "Jméno: " + name + "\n" +
      "E-mail: " + email + "\n" +
      "Telefon: " + phone + "\n" +
      "Služba: " + service + "\n" +
      "Místo realizace: " + location + "\n\n" +
      "Zpráva:\n" + message
    );

    if (messageBox) {
      messageBox.textContent = "Otevře se předvyplněný e-mail. Pokud se nic nestane, napište prosím přímo na bmpodlahy@gmail.com.";
      messageBox.classList.add("visible");
    }

    window.location.href = "mailto:bmpodlahy@gmail.com?subject=" + subject + "&body=" + body;
  });
});

const lightbox = document.querySelector("[data-lightbox]");

if (lightbox) {
  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
  const lightboxCloseButtons = lightbox.querySelectorAll("[data-lightbox-close]");
  const lightboxTriggers = document.querySelectorAll("[data-lightbox-trigger]");
  let lastTrigger = null;

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";

    if (lightboxImage) {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "";
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = "";
    }

    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  };

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.dataset.lightboxSrc;
      const alt = trigger.dataset.lightboxAlt || "";

      if (!src || !lightboxImage) {
        return;
      }

      lastTrigger = trigger;
      lightboxImage.src = src;
      lightboxImage.alt = alt;

      if (lightboxCaption) {
        lightboxCaption.textContent = alt;
      }

      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  lightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
