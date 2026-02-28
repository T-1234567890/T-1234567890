const manifestPath = "/blog/manifest.json";

const fmtDate = (dateStr, lang) => {
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  const locale = lang === "zh" ? "zh-CN" : "en-US";
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getActiveLang = () => {
  const attr = document.documentElement?.dataset?.lang;
  if (attr === "zh" || attr === "en") return attr;
  return window.location.pathname.startsWith("/zh/") ? "zh" : "en";
};

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const state = { posts: [], query: "" };

const pickPostsForLang = (allPosts, lang) => {
  // Group by slug; for each slug pick the current language if available,
  // otherwise fall back to English, otherwise any.
  const bySlug = new Map();
  for (const p of allPosts) {
    if (!p?.slug) continue;
    const arr = bySlug.get(p.slug) ?? [];
    arr.push(p);
    bySlug.set(p.slug, arr);
  }

  const picked = [];
  for (const [slug, arr] of bySlug.entries()) {
    const best =
      arr.find((p) => p.lang === lang) ??
      arr.find((p) => p.lang === "en") ??
      arr[0];
    if (best) picked.push(best);
  }

  picked.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug),
  );
  return picked;
};

const matchesQuery = (post, q) => {
  if (!q) return true;
  const hay = [
    post.title || "",
    post.summary || "",
    Array.isArray(post.tags) ? post.tags.join(" ") : "",
    post.slug || "",
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q.toLowerCase());
};

const renderIndex = () => {
  const listEl = document.getElementById("blogList");
  if (!listEl) return;

  const lang = getActiveLang();
  const q = state.query.trim();

  const posts = pickPostsForLang(state.posts, lang).filter((p) =>
    matchesQuery(p, q),
  );

  if (!state.posts.length) {
    listEl.innerHTML = '<p class="muted">No posts yet.</p>';
    return;
  }

  if (!posts.length) {
    listEl.innerHTML = '<p class="muted">No matching posts.</p>';
    return;
  }

  listEl.innerHTML = posts
    .map((post) => {
      const title = escapeHtml(post.title ?? post.slug);
      const summary = escapeHtml(post.summary ?? "");
      const href = post.url || `/blog/${post.slug}/`;
      const tags = Array.isArray(post.tags) ? post.tags : [];

      const tagsHtml = tags.length
        ? `<div class="btn-row">${tags
            .map((t) => `<span class="pill">${escapeHtml(t)}</span>`)
            .join("")}</div>`
        : "";

      return `
        <a class="blog-card-link" href="${href}">
          <article class="post-card" role="listitem">
            <h3 class="post-card__title">${title}</h3>
            <div class="post-card__meta">${fmtDate(post.date, post.lang)}</div>
            <p class="post-card__excerpt">${summary}</p>
            ${tagsHtml}
          </article>
        </a>
      `;
    })
    .join("");
};

const loadManifest = async () => {
  const listEl = document.getElementById("blogList");
  if (listEl) listEl.innerHTML = '<p class="muted">Loading posts…</p>';

  try {
    const res = await fetch(manifestPath);
    if (!res.ok) throw new Error("manifest fetch failed");
    const posts = await res.json();
    state.posts = Array.isArray(posts) ? posts : [];
  } catch {
    state.posts = [];
    if (listEl)
      listEl.innerHTML = '<p class="muted">Unable to load posts right now.</p>';
    return;
  }

  renderIndex();
};

const initSearch = () => {
  const input = document.getElementById("blogSearch");
  if (!input) return;
  input.addEventListener("input", () => {
    state.query = input.value || "";
    renderIndex();
  });
};

const initLangRerender = () => {
  const btn = document.querySelector(".nav__lang");
  if (!btn) return;
  // No-op on purpose: language toggle navigates between /blog/ and /zh/blog/.
};

loadManifest();
initSearch();
initLangRerender();
