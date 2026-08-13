import { addEnglishOnlyBlogTip } from "./language-tip.js";

const manifestPath = "/blog/manifest.json";
export const POSTS_PER_PAGE = 6;

const uiStrings = {
  en: {
    previous: "← Previous",
    next: "Next →",
    pageLabel: (page) => `Page ${page}`,
    loading: "Loading posts…",
    empty: "No posts yet.",
    noMatches: "No matching posts.",
    loadError: "Unable to load posts right now.",
  },
  zh: {
    previous: "← 上一页",
    next: "下一页 →",
    pageLabel: (page) => `第 ${page} 页`,
    loading: "正在加载文章…",
    empty: "暂时还没有文章。",
    noMatches: "没有找到匹配的文章。",
    loadError: "暂时无法加载文章。",
  },
};

const fmtDate = (dateStr, lang = getActiveLang()) => {
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
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

const state = { posts: [], query: "", page: 1 };

export const pickEnglishPosts = (allPosts) =>
  allPosts
    .filter((post) => post?.lang === "en" && post?.slug)
    .sort((a, b) =>
      a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug),
    );

export const matchesQuery = (post, query) => {
  const q = query.trim().toLocaleLowerCase();
  if (!q) return true;

  return [post.title || "", post.summary || "", post.slug || ""]
    .join(" ")
    .toLocaleLowerCase()
    .includes(q);
};

export const paginatePosts = (posts, requestedPage, perPage = POSTS_PER_PAGE) => {
  const pageCount = Math.max(1, Math.ceil(posts.length / perPage));
  const page = Math.min(pageCount, Math.max(1, Number(requestedPage) || 1));
  const start = (page - 1) * perPage;

  return {
    page,
    pageCount,
    posts: posts.slice(start, start + perPage),
  };
};

const readUrlState = () => {
  const params = new URLSearchParams(window.location.search);
  const page = Number.parseInt(params.get("page") || "1", 10);
  return {
    query: params.get("q") || "",
    page: Number.isFinite(page) && page > 0 ? page : 1,
  };
};

const buildListingUrl = (page, query) => {
  const url = new URL(window.location.href);
  url.search = "";
  if (query.trim()) url.searchParams.set("q", query.trim());
  if (page > 1) url.searchParams.set("page", String(page));
  return `${url.pathname}${url.search}${url.hash}`;
};

const writeUrlState = ({ replace = false } = {}) => {
  const href = buildListingUrl(state.page, state.query);
  history[replace ? "replaceState" : "pushState"]({}, "", href);
};

const paginationLink = ({ page, label, className = "", disabled = false }) => {
  if (disabled) {
    return `<span class="blog-pagination__link ${className} is-disabled" aria-disabled="true">${label}</span>`;
  }

  return `<a class="blog-pagination__link ${className}" href="${escapeHtml(
    buildListingUrl(page, state.query),
  )}" data-blog-page="${page}">${label}</a>`;
};

const renderPagination = (page, pageCount) => {
  const paginationEl = document.getElementById("blogPagination");
  if (!paginationEl) return;
  const strings = uiStrings[getActiveLang()];

  if (pageCount <= 1) {
    paginationEl.innerHTML = "";
    paginationEl.hidden = true;
    return;
  }

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)
    .map((number) =>
      number === page
        ? `<span class="blog-pagination__page is-current" aria-current="page">${number}</span>`
        : `<a class="blog-pagination__page" href="${escapeHtml(
            buildListingUrl(number, state.query),
          )}" data-blog-page="${number}" aria-label="${strings.pageLabel(number)}">${number}</a>`,
    )
    .join("");

  paginationEl.hidden = false;
  paginationEl.innerHTML = `
    <div class="blog-pagination__desktop">
      ${paginationLink({
        page: page - 1,
        label: strings.previous,
        disabled: page === 1,
      })}
      <div class="blog-pagination__pages">${pages}</div>
      ${paginationLink({
        page: page + 1,
        label: strings.next,
        disabled: page === pageCount,
      })}
    </div>
    <div class="blog-pagination__mobile">
      ${paginationLink({
        page: page - 1,
        label: strings.previous,
        disabled: page === 1,
      })}
      <span class="blog-pagination__status">${page} / ${pageCount}</span>
      ${paginationLink({
        page: page + 1,
        label: strings.next,
        disabled: page === pageCount,
      })}
    </div>
  `;
};

const renderIndex = () => {
  const listEl = document.getElementById("blogList");
  if (!listEl) return;
  const lang = getActiveLang();
  const strings = uiStrings[lang];

  const matches = pickEnglishPosts(state.posts).filter((post) =>
    matchesQuery(post, state.query),
  );
  const requestedPage = state.page;
  const paginated = paginatePosts(matches, state.page);
  state.page = paginated.page;
  if (requestedPage !== state.page) writeUrlState({ replace: true });

  if (!state.posts.length) {
    listEl.innerHTML = `<p class="muted">${strings.empty}</p>`;
    renderPagination(1, 1);
    return;
  }

  if (!matches.length) {
    listEl.innerHTML = `<p class="muted">${strings.noMatches}</p>`;
    renderPagination(1, 1);
    return;
  }

  listEl.innerHTML = paginated.posts
    .map((post) => {
      const title = escapeHtml(post.title ?? post.slug);
      const summary = escapeHtml(post.summary ?? "");
      const href =
        lang === "zh" ? `/zh/blog/${post.slug}/` : post.url || `/blog/${post.slug}/`;
      const date = escapeHtml(post.date ?? "");

      return `
        <a class="blog-entry" href="${escapeHtml(href)}" role="listitem" lang="en">
          <article>
            <div class="blog-entry__title-row">
              <h2 class="blog-entry__title">${title}</h2>
              <span class="blog-entry__arrow" aria-hidden="true">↗</span>
            </div>
            <time class="blog-entry__date" datetime="${date}">${fmtDate(post.date, lang)}</time>
            <p class="blog-entry__description">${summary}</p>
          </article>
        </a>
      `;
    })
    .join("");

  renderPagination(paginated.page, paginated.pageCount);
};

const loadManifest = async () => {
  const listEl = document.getElementById("blogList");
  const strings = uiStrings[getActiveLang()];
  if (listEl) listEl.innerHTML = `<p class="muted">${strings.loading}</p>`;

  try {
    const res = await fetch(manifestPath);
    if (!res.ok) throw new Error("manifest fetch failed");
    const posts = await res.json();
    state.posts = Array.isArray(posts) ? posts : [];
  } catch {
    state.posts = [];
    if (listEl) {
      listEl.innerHTML = `<p class="muted">${strings.loadError}</p>`;
    }
    return;
  }

  renderIndex();
};

const initSearch = () => {
  const input = document.getElementById("blogSearch");
  if (!input) return;

  input.value = state.query;
  input.addEventListener("input", () => {
    state.query = input.value || "";
    state.page = 1;
    writeUrlState({ replace: true });
    renderIndex();
  });
};

const initPagination = () => {
  const paginationEl = document.getElementById("blogPagination");
  paginationEl?.addEventListener("click", (event) => {
    const linkEl = event.target.closest("[data-blog-page]");
    if (!linkEl) return;

    event.preventDefault();
    state.page = Number.parseInt(linkEl.dataset.blogPage || "1", 10) || 1;
    writeUrlState();
    renderIndex();
    document.getElementById("blogList")?.scrollIntoView({ block: "start" });
  });
};

const init = () => {
  addEnglishOnlyBlogTip();

  Object.assign(state, readUrlState());
  initSearch();
  initPagination();
  loadManifest();

  window.addEventListener("popstate", () => {
    Object.assign(state, readUrlState());
    const input = document.getElementById("blogSearch");
    if (input) input.value = state.query;
    renderIndex();
  });
};

if (typeof document !== "undefined") init();
