import { initHeroScrollTransition, initLanguageToggle } from "./controller.js";

const prefersReduced =
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

const heroRootEl = document.getElementById("heroRoot");
const heroSentinelEl = document.getElementById("heroSentinel");
const typedNameEl = document.getElementById("typedName");
const navSentinelEl = document.getElementById("nav-trigger");
const navEl = document.querySelector(".nav");
const langButtonEl = document.querySelector(".nav__lang");

if (langButtonEl) initLanguageToggle({ buttonEl: langButtonEl });

for (const img of document.querySelectorAll("img.logo__img[data-fallback]")) {
  const markLoaded = () => img.classList.add("is-loaded");
  img.addEventListener("load", markLoaded);
  if (img.complete && img.naturalWidth > 0) markLoaded();

  img.addEventListener(
    "error",
    () => {
      const stage = Number(img.dataset.fallbackStage ?? "0");

      if (stage === 0) {
        const fallback = img.getAttribute("data-fallback");
        if (!fallback) return;
        img.dataset.fallbackStage = "1";
        img.src = fallback;
        return;
      }

      if (stage === 1) {
        img.dataset.fallbackStage = "2";
        img.src = "assets/logo.svg";
      }
    },
  );
}

const rand = (min, max) => Math.round(min + Math.random() * (max - min));

const getTypewriter = () => {
  const T = window.Typewriter;
  return typeof T === "function" ? T : null;
};

let nameWriter = null;
const stopNameWriter = () => {
  try {
    nameWriter?.stop?.();
  } catch {}
  nameWriter = null;
};

const startNameWriter = () => {
  if (!typedNameEl) return;

  stopNameWriter();
  typedNameEl.textContent = "";

  if (prefersReduced) {
    typedNameEl.textContent = "Tony";
    return;
  }

  const Typewriter = getTypewriter();
  if (!Typewriter) {
    typedNameEl.textContent = "Tony";
    return;
  }

  const identities = ["Tony", "1234567890-", "T-1234567890"];

  nameWriter = new Typewriter(typedNameEl, {
    loop: true,
    delay: "natural",
    deleteSpeed: "natural",
    cursor: "",
  });

  for (const name of identities) {
    nameWriter
      .typeString(name)
      .pauseFor(rand(520, 740))
      .deleteAll()
      .pauseFor(rand(180, 320));
  }

  nameWriter.start();
};

const stopTerminalWriter = () => {};
const startTerminalWriter = () => {};

startNameWriter();

if (heroRootEl && heroSentinelEl && navSentinelEl && navEl) {
  initHeroScrollTransition({
    heroRootEl,
    heroSentinelEl,
    navSentinelEl,
    navEl,
    onNameEnter: () => {
      stopTerminalWriter();
      startNameWriter();
    },
    onTerminalEnter: () => {
      stopNameWriter();
      startTerminalWriter();
    },
    onInactive: () => {
      stopNameWriter();
      stopTerminalWriter();
    },
    terminalEnabled: !prefersReduced,
  });
}

const initReveal = () => {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  if (prefersReduced) {
    for (const el of els) el.classList.add("is-inview");
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("is-inview");
        obs.unobserve(e.target);
      }
    },
    { threshold: 0.15 },
  );

  for (const el of els) obs.observe(el);
};

const copyToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "-1000px";
  ta.style.left = "-1000px";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  ta.remove();
};

const initDiscordCopy = () => {
  const btn = document.getElementById("discordCopy");
  if (!btn) return;

  let tipTimer = 0;
  btn.addEventListener("click", async () => {
    try {
      await copyToClipboard("1234567890048421");
      btn.classList.add("is-copied");
      clearTimeout(tipTimer);
      tipTimer = window.setTimeout(() => btn.classList.remove("is-copied"), 900);
    } catch {}
  });
};

const initPrivacyModal = () => {
  const open = document.getElementById("privacyOpen");
  const dialog = document.getElementById("privacyDialog");
  if (!open || !dialog) return;

  open.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  });
};

const initDraggableTechCloud = () => {
  const cloud = document.querySelector(".tech-cloud");
  if (!cloud) return;

  for (const chip of cloud.querySelectorAll(".tech-chip")) {
    const cycleIcons = chip.dataset.cycleIcons?.split("|").filter(Boolean) ?? [];
    if (cycleIcons.length) {
      chip.dataset.cycleIndex = "0";
      chip.addEventListener("click", () => {
        if (chip.dataset.dragMoved === "true") return;
        const img = chip.querySelector(".tech-chip__icon img");
        if (!img) return;
        const nextIndex = (Number(chip.dataset.cycleIndex ?? "0") + 1) % cycleIcons.length;
        chip.dataset.cycleIndex = String(nextIndex);
        img.src = cycleIcons[nextIndex];
      });
    }

    chip.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 && event.pointerType === "mouse") return;

      const cloudRect = cloud.getBoundingClientRect();
      const chipRect = chip.getBoundingClientRect();
      const offsetX = event.clientX - chipRect.left;
      const offsetY = event.clientY - chipRect.top;
      const startX = event.clientX;
      const startY = event.clientY;
      let moved = false;

      chip.classList.add("is-dragging");
      chip.setPointerCapture?.(event.pointerId);

      const moveTo = (clientX, clientY) => {
        if (Math.hypot(clientX - startX, clientY - startY) > 4) moved = true;
        const maxX = Math.max(0, cloudRect.width - chip.offsetWidth);
        const maxY = Math.max(0, cloudRect.height - chip.offsetHeight);
        const nextX = Math.min(Math.max(clientX - cloudRect.left - offsetX, 0), maxX);
        const nextY = Math.min(Math.max(clientY - cloudRect.top - offsetY, 0), maxY);
        chip.style.left = `${nextX}px`;
        chip.style.top = `${nextY}px`;
      };

      const onMove = (moveEvent) => moveTo(moveEvent.clientX, moveEvent.clientY);
      const onUp = () => {
        chip.classList.remove("is-dragging");
        chip.dataset.dragMoved = moved ? "true" : "false";
        chip.removeEventListener("pointermove", onMove);
        chip.removeEventListener("pointerup", onUp);
        chip.removeEventListener("pointercancel", onUp);
        window.setTimeout(() => {
          delete chip.dataset.dragMoved;
        }, 120);
      };

      chip.addEventListener("pointermove", onMove);
      chip.addEventListener("pointerup", onUp);
      chip.addEventListener("pointercancel", onUp);
      moveTo(event.clientX, event.clientY);
    });
  }
};

initReveal();
initDiscordCopy();
initPrivacyModal();
initDraggableTechCloud();
