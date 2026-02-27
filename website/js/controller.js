const I18N = {
  en: {
    nav_about: "About",
    nav_links: "Links",
    nav_projects: "Projects",
    nav_blog: "Blog",
    hero_hi: "Hi, I’m",
    about_title: "About",
    about_body: "This is a landing page, not a portfolio. One page. One vibe.",
    links_title: "Links",
    links_sub: "Find me around the internet.",
    projects_title: "Projects",
    projects_body: "Keep it minimal. A single highlight is enough.",
    blog_title: "Blog",
    blog_body: "Notes on building calm, technical UI.",
    footer_line1: "© 2026 Tony. All rights reserved.",
    footer_line2: "This website uses cookies for basic functionality and analytics.",
    footer_privacy: "Privacy Policy",
    privacy_title: "Privacy Policy",
    privacy_1: "This website may use cookies.",
    privacy_2: "Cookies are used only for basic functionality and analytics.",
    privacy_3: "No personal data is sold.",
    privacy_4: "You can disable cookies in your browser settings.",
  },
  zh: {
    nav_about: "关于",
    nav_links: "链接",
    nav_projects: "项目",
    nav_blog: "博客",
    hero_hi: "你好，我是",
    about_title: "关于",
    about_body: "这里不是作品集，而是一页式着陆页：一个页面，一个氛围。",
    links_title: "链接",
    links_sub: "你可以在这些地方找到我。",
    projects_title: "项目",
    projects_body: "保持极简：一个重点就足够。",
    blog_title: "博客",
    blog_body: "记录如何做出冷静、技术感的 UI。",
    footer_line1: "© 2026 Tony。保留所有权利。",
    footer_line2: "本网站使用 Cookie 以支持基础功能与分析。",
    footer_privacy: "隐私政策",
    privacy_title: "隐私政策",
    privacy_1: "本网站可能使用 Cookie。",
    privacy_2: "Cookie 仅用于基础功能与分析。",
    privacy_3: "不会出售任何个人数据。",
    privacy_4: "你可以在浏览器设置中禁用 Cookie。",
  },
};

export function initLanguageToggle({ buttonEl }) {
  const apply = (lang) => {
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

    const dict = I18N[lang] ?? I18N.en;
    for (const node of document.querySelectorAll("[data-i18n]")) {
      const key = node.getAttribute("data-i18n");
      if (!key) continue;
      const next = dict[key];
      if (typeof next === "string") node.textContent = next;
    }

    buttonEl.textContent = lang === "zh" ? "EN" : "中文";
    buttonEl.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
  };

  let lang = "en";
  apply(lang);

  buttonEl.addEventListener("click", () => {
    lang = lang === "en" ? "zh" : "en";
    apply(lang);
  });
}

export function initHeroScrollTransition({
  heroRootEl,
  heroSentinelEl,
  navSentinelEl,
  navEl,
  onNameEnter,
  onTerminalEnter,
  onInactive,
  terminalEnabled = true,
}) {
  const introEl = document.getElementById("hero-intro");
  const terminalEl = document.getElementById("hero-terminal");

  let currentState = "name";
  const setState = (next) => {
    if (currentState === next) return;
    currentState = next;

    heroRootEl.classList.toggle("state-name", next === "name");
    heroRootEl.classList.toggle("state-terminal", next === "terminal");

    if (introEl) introEl.setAttribute("aria-hidden", next === "terminal" ? "true" : "false");
    if (terminalEl)
      terminalEl.setAttribute("aria-hidden", next === "terminal" ? "false" : "true");

    if (next === "terminal") onTerminalEnter?.();
    else onNameEnter?.();
  };

  const activeObs = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      const isActive = Boolean(entry?.isIntersecting);
      heroRootEl.classList.toggle("is-active", isActive);
      if (!isActive) {
        onInactive?.();
        return;
      }

      // If the user scrolls back up into the hero, resume the correct loop.
      if (currentState === "terminal") onTerminalEnter?.();
      else onNameEnter?.();
    },
    { threshold: 0 },
  );
  activeObs.observe(heroRootEl);

  heroRootEl.classList.add("use-progress");

  let heroTop = 0;
  let heroHeight = 1;
  const refreshMetrics = () => {
    const rect = heroRootEl.getBoundingClientRect();
    heroTop = rect.top + window.scrollY;
    heroHeight = Math.max(1, heroRootEl.offsetHeight || rect.height || 1);
  };

  const clamp01 = (n) => Math.max(0, Math.min(1, n));

  const morphStart = 0.12;
  const morphFull = 0.2;

  let raf = 0;
  const update = () => {
    raf = 0;
    const y = window.scrollY || 0;
    const progress = clamp01((y - heroTop) / heroHeight);

    if (!terminalEnabled) {
      setState("name");
      return;
    }

    const morph = clamp01((progress - morphStart) / (morphFull - morphStart));
    heroRootEl.style.setProperty("--hero-morph", morph.toFixed(4));

    if (progress >= morphStart) setState("terminal");
    else setState("name");
  };

  const schedule = () => {
    if (raf) return;
    raf = requestAnimationFrame(update);
  };

  refreshMetrics();
  schedule();
  window.addEventListener("scroll", schedule, { passive: true });
  const onResize = () => {
    refreshMetrics();
    schedule();
  };
  window.addEventListener("resize", onResize, { passive: true });

  const navObs = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      navEl.classList.toggle("is-compact", !entry?.isIntersecting);
    },
    { threshold: 0 },
  );
  navObs.observe(navSentinelEl);

  // Initial state sync
  heroRootEl.classList.add("is-active");
  heroRootEl.classList.add("state-name");
  heroRootEl.classList.remove("state-terminal");

  return () => {
    activeObs.disconnect();
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", onResize);
    navObs.disconnect();
    if (raf) cancelAnimationFrame(raf);
  };
}
