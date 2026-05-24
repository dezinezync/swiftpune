(() => {
  "use strict";

  const body = document.body;
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // -- Scroll state on nav -------------------------------------------------
  let lastScrolled = null;
  const updateScrollState = () => {
    const scrolled = window.scrollY > 40;
    if (scrolled === lastScrolled) return;
    lastScrolled = scrolled;
    body.classList.toggle("is-scrolled", scrolled);
  };
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  // -- Mobile menu ---------------------------------------------------------
  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      menu.hidden = true;
      body.style.overflow = "";
    };
    const openMenu = () => {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      menu.hidden = false;
      body.style.overflow = "hidden";
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });

    menu.addEventListener("click", (e) => {
      if (e.target instanceof HTMLAnchorElement) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        toggle.focus();
      }
    });

    const mq = window.matchMedia("(min-width: 768px)");
    mq.addEventListener("change", (e) => {
      if (e.matches) closeMenu();
    });
  }

  // -- Scroll reveal -------------------------------------------------------
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const reveals = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
  }

  // -- Smooth-scroll offset for sticky nav --------------------------------
  // Anchor links inside the page use CSS smooth-scroll; this just ensures
  // the landing position clears the nav.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({
        top,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      if (history.pushState) history.pushState(null, "", id);
    });
  });
})();
