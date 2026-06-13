(() => {
  "use strict";

  const body = document.body;
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  const yearEl = document.getElementById("year");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* -- Nav scroll state ------------------------------------------------- */
  let lastScrolled = null;
  const updateScrollState = () => {
    const scrolled = window.scrollY > 40;
    if (scrolled === lastScrolled) return;
    lastScrolled = scrolled;
    body.classList.toggle("is-scrolled", scrolled);
  };
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  /* -- Mobile menu ------------------------------------------------------ */
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

    const mq = window.matchMedia("(min-width: 821px)");
    mq.addEventListener("change", (e) => {
      if (e.matches) closeMenu();
    });
  }

  /* -- Scroll-reveal sections ----------------------------------------- */
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    const vh = window.innerHeight || 800;
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh) {
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    });
  }

  /* -- Subtle hero bubble parallax (skipped if reduced-motion) -------- */
  if (!reduceMotion) {
    const blobs = document.querySelectorAll(".hero__blob");
    if (blobs.length) {
      let ticking = false;
      const apply = () => {
        const y = window.scrollY;
        blobs.forEach((b, i) => {
          const factor = i === 0 ? 0.12 : -0.08;
          b.style.translate = `0 ${y * factor}px`;
        });
        ticking = false;
      };
      window.addEventListener(
        "scroll",
        () => {
          if (!ticking) {
            window.requestAnimationFrame(apply);
            ticking = true;
          }
        },
        { passive: true }
      );
    }
  }

  /* -- Shuffle core team on each page load ----------------------------
     Philosophy: nobody has a fixed seat. Whoever's listed first on a
     given visit is just luck of the shuffle. Fisher-Yates on an array
     of nodes, then re-append in the new order (appendChild moves DOM
     nodes rather than duplicating them). */
  const crew = document.querySelector(".crew");
  if (crew) {
    const members = Array.from(crew.children);
    for (let i = members.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [members[i], members[j]] = [members[j], members[i]];
    }
    members.forEach((m) => crew.appendChild(m));
  }

  /* -- Smooth-scroll to in-page anchors ------------------------------- */
  /* The nav is non-sticky, so no nav-height offset is needed — just a
     small breathing-room gap above the target. */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.scrollY - 16;
      window.scrollTo({
        top,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      if (history.pushState) history.pushState(null, "", id);
    });
  });
})();
