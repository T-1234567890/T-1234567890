import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "website", "blog");
const POSTS_DIR = path.join(BLOG_DIR, "posts");
const OUT_MANIFEST = path.join(BLOG_DIR, "manifest.json");
const ZH_BLOG_DIR = path.join(ROOT, "website", "zh", "blog");

const isIsoDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s);

const stripQuotes = (v) => {
  const s = v.trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1);
  }
  return s;
};

const parseFrontMatter = (md, filePathForErrors) => {
  const text = md.replace(/\r\n?/g, "\n");
  if (!text.startsWith("---\n")) {
    throw new Error(
      `Missing front-matter (expected leading ---) in ${filePathForErrors}`,
    );
  }

  const end = text.indexOf("\n---\n", 4);
  if (end === -1) {
    throw new Error(
      `Unterminated front-matter (missing closing ---) in ${filePathForErrors}`,
    );
  }

  const fmBlock = text.slice(4, end).trim();
  const body = text.slice(end + 5);

  const data = {};
  for (const line of fmBlock.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const idx = trimmed.indexOf(":");
    if (idx === -1) {
      throw new Error(
        `Invalid front-matter line "${line}" in ${filePathForErrors}`,
      );
    }

    const key = trimmed.slice(0, idx).trim();
    const rawVal = trimmed.slice(idx + 1).trim();

    data[key] = stripQuotes(rawVal);
  }

  for (const k of ["title", "date", "summary", "lang", "slug"]) {
    if (typeof data[k] !== "string" || !data[k].trim()) {
      throw new Error(`Missing required "${k}" in ${filePathForErrors}`);
    }
    data[k] = data[k].trim();
  }

  if (!isIsoDate(data.date)) {
    throw new Error(
      `Invalid date "${data.date}" in ${filePathForErrors} (expected YYYY-MM-DD)`,
    );
  }
  if (data.lang !== "en" && data.lang !== "zh") {
    throw new Error(
      `Invalid lang "${data.lang}" in ${filePathForErrors} (expected en|zh)`,
    );
  }
  if (!/^[a-z0-9-]+$/.test(data.slug)) {
    throw new Error(
      `Invalid slug "${data.slug}" in ${filePathForErrors} (use lowercase a-z0-9-)`,
    );
  }

  return { data, body };
};

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const renderPostIndexHtml = (post) => {
  const safeTitle = escapeHtml(post.title);
  const isZh = post.lang === "zh";
  const htmlLang = isZh ? "zh-Hans" : "en";
  const homeHref = isZh ? "/zh/" : "/";
  const blogHref = isZh ? "/zh/blog/" : "/blog/";
  const aboutHref = isZh ? "/zh/about/" : "/about/";
  const projectsHref = isZh ? "/zh/projects/" : "/projects/";
  const privacyHref = isZh ? "/zh/privacy/" : "/privacy/";
  const legalNoticesHref = isZh ? "/zh/legal-notices/" : "/legal-notices/";
  return `<!doctype html>
<html lang="${htmlLang}" data-lang="${post.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle} - Blog</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
    />
    <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
    <link rel="icon" href="/assets/logo.png" type="image/png" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body class="subpage" data-view="blog-post" data-slug="${post.slug}">
    <div class="bg" aria-hidden="true"></div>

    <header class="topbar">
      <nav class="nav" aria-label="Primary">
        <a class="nav__logo" href="${homeHref}" aria-label="Home">
          <img src="/assets/icon2.png" alt="" width="28" height="28" />
        </a>

        <div class="nav__center">
          <a class="nav__link" href="${aboutHref}" data-i18n="nav_about">About</a>
          <a class="nav__link" href="${blogHref}" aria-current="page" data-i18n="nav_blog">Blog</a>
          <a class="nav__link" href="${projectsHref}" data-i18n="nav_projects">Projects</a>
        </div>

        <button class="nav__lang" type="button" aria-pressed="${isZh}">${isZh ? "EN" : "中文"}</button>
      </nav>
    </header>

    <main class="page">
      <div class="page-shell stack">
        <section class="page-header">
          <p class="eyebrow"><a href="${blogHref}" class="footer__link" data-i18n="blog_back">Back to blog</a></p>
          <h1 class="page-title" id="postTitle">${safeTitle}</h1>
          <div class="post-meta" id="postMeta">—</div>
        </section>

        <article id="postBody" class="post-body">
          <p class="muted">Loading post…</p>
        </article>
      </div>
    </main>

    <footer class="footer reveal" id="siteFooter">
      <div class="footer__inner footer__inner--simple">
        <div class="footer__line" data-i18n="footer_line1">
          © 2026 Tony Hu. All rights reserved.
        </div>
        <div class="footer__tiny" data-i18n="footer_line2">
          This website uses cookies for basic functionality and analytics.
        </div>
        <div class="footer__line">
          <a class="footer__link" href="${privacyHref}" data-i18n="footer_privacy">Privacy Policy</a>
          <span class="footer__separator" aria-hidden="true">·</span>
          <a class="footer__link" href="${legalNoticesHref}" data-i18n="footer_legal_notices">${isZh ? "法律声明" : "Legal Notices"}</a>
        </div>
      </div>
    </footer>

    <script type="module" src="/blog/post-renderer.js"></script>
    <script type="module" src="/js/main.js"></script>
  </body>
</html>
`;
};

const renderZhBlogIndexHtml = () => `<!doctype html>
<html lang="zh-Hans" data-lang="zh">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Blog - 1234567890.dev</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
    />
    <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
    <link rel="icon" href="/assets/logo.png" type="image/png" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body class="subpage" data-view="blog-index">
    <div class="bg" aria-hidden="true"></div>

    <header class="topbar">
      <nav class="nav" aria-label="Primary">
        <a class="nav__logo" href="/zh/" aria-label="Home">
          <img src="/assets/icon2.png" alt="" width="28" height="28" />
        </a>

        <div class="nav__center">
          <a class="nav__link" href="/zh/about/" data-i18n="nav_about">About</a>
          <a class="nav__link" href="/zh/blog/" aria-current="page" data-i18n="nav_blog">Blog</a>
          <a class="nav__link" href="/zh/projects/" data-i18n="nav_projects">Projects</a>
        </div>

        <button class="nav__lang" type="button" aria-pressed="true">EN</button>
      </nav>
    </header>

    <div class="nav-trigger" id="nav-trigger" aria-hidden="true"></div>

    <main class="page">
      <div class="page-shell stack">
        <section class="page-header">
          <h1 class="page-title" data-i18n="blog_index_h1">博客</h1>
          <p class="page-lede">
            <span data-i18n="blog_index_lede">一些我总是忘记写、也忘记更新的杂七杂八。</span>
          </p>
        </section>

        <section class="blog-index" aria-label="博客文章">
          <div class="blog-controls">
            <div class="blog-search-field">
              <span class="blog-search-field__icon" aria-hidden="true">🔍</span>
              <input
                id="blogSearch"
                class="blog-search"
                type="search"
                placeholder="搜索文章..."
                aria-label="搜索博客文章"
                autocomplete="off"
              />
            </div>
          </div>
          <div id="blogList" class="blog-list" role="list">
            <p class="muted">Loading posts…</p>
          </div>
          <nav
            id="blogPagination"
            class="blog-pagination"
            aria-label="博客分页"
            hidden
          ></nav>
        </section>
      </div>
    </main>

    <footer class="footer reveal" id="siteFooter">
      <div class="footer__inner footer__inner--simple">
        <div class="footer__line" data-i18n="footer_line1">
          © 2026 Tony Hu. All rights reserved.
        </div>
        <div class="footer__tiny" data-i18n="footer_line2">
          This website uses cookies for basic functionality and analytics.
        </div>
        <div class="footer__line">
          <a class="footer__link" href="/zh/privacy/" data-i18n="footer_privacy">Privacy Policy</a>
          <span class="footer__separator" aria-hidden="true">·</span>
          <a class="footer__link" href="/zh/legal-notices/" data-i18n="footer_legal_notices">法律声明</a>
        </div>
      </div>
    </footer>

    <script type="module" src="/js/main.js"></script>
    <script type="module" src="/blog/blog.js"></script>
  </body>
</html>
`;

const main = async () => {
  await fs.mkdir(POSTS_DIR, { recursive: true });

  const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  const mdFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name)
    .sort();

  const posts = [];
  // Allow translated variants like: <slug>.en.md / <slug>.zh.md
  // We treat (slug, lang) as the unique key.
  const seenKeys = new Set();

  for (const filename of mdFiles) {
    const fullPath = path.join(POSTS_DIR, filename);
    const md = await fs.readFile(fullPath, "utf8");

    const { data } = parseFrontMatter(md, fullPath);
    const stem = path.basename(filename, ".md"); // e.g. "hello-world", or "hello-world.en"

    if (stem !== data.slug) {
      const parts = stem.split(".");
      const okTranslated =
        parts.length === 2 && parts[0] === data.slug && parts[1] === data.lang;

      if (!okTranslated) {
        throw new Error(
          `Filename "${filename}" does not match slug/lang from front-matter.\n` +
            `Expected "${data.slug}.md" or "${data.slug}.${data.lang}.md".`,
        );
      }
    }

    const key = `${data.slug}:${data.lang}`;
    if (seenKeys.has(key)) {
      throw new Error(
        `Duplicate post for slug "${data.slug}" and lang "${data.lang}" found.`,
      );
    }
    seenKeys.add(key);

    posts.push({
      title: data.title,
      date: data.date,
      summary: data.summary,
      lang: data.lang,
      slug: data.slug,
      source: `/blog/posts/${filename}`,
      url: data.lang === "zh" ? `/zh/blog/${data.slug}/` : `/blog/${data.slug}/`,
    });
  }

  posts.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug),
  );

  await fs.writeFile(OUT_MANIFEST, JSON.stringify(posts, null, 2) + "\n", "utf8");

  const englishPosts = posts.filter((post) => post.lang === "en");

  for (const post of englishPosts) {
    const dir = path.join(BLOG_DIR, post.slug);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(
      path.join(dir, "index.html"),
      renderPostIndexHtml(post),
      "utf8",
    );

    const zhFallbackDir = path.join(ZH_BLOG_DIR, post.slug);
    await fs.mkdir(zhFallbackDir, { recursive: true });
    await fs.writeFile(
      path.join(zhFallbackDir, "index.html"),
      renderPostIndexHtml({ ...post, lang: "zh" }),
      "utf8",
    );
  }

  const cleanupGeneratedDirs = async ({ baseDir, keepDirs = new Set() }) => {
    let dirents = [];
    try {
      dirents = await fs.readdir(baseDir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const d of dirents) {
      if (!d.isDirectory()) continue;
      if (d.name === "posts") continue;
      if (d.name === "vendor") continue;
      if (d.name.startsWith(".")) continue;

      const dir = path.join(baseDir, d.name);
      const maybeIndex = path.join(dir, "index.html");

      try {
        await fs.stat(maybeIndex);
      } catch {
        continue;
      }

      if (!keepDirs.has(d.name)) {
        await fs.rm(dir, { recursive: true, force: true });
      }
    }
  };

  // Delete stale generated post folders in both EN and ZH trees.
  const enSlugs = new Set(englishPosts.map((p) => p.slug));
  const zhSlugs = new Set(enSlugs);
  await cleanupGeneratedDirs({ baseDir: BLOG_DIR, keepDirs: enSlugs });
  await cleanupGeneratedDirs({ baseDir: ZH_BLOG_DIR, keepDirs: zhSlugs });

  // Ensure /zh/blog/ exists as the Chinese blog index route.
  await fs.mkdir(ZH_BLOG_DIR, { recursive: true });
  await fs.writeFile(path.join(ZH_BLOG_DIR, "index.html"), renderZhBlogIndexHtml(), "utf8");

  // Remove legacy manifest location if present.
  const legacy = path.join(POSTS_DIR, "manifest.json");
  await fs.rm(legacy, { force: true });

  console.log(`Generated ${posts.length} post page(s) + blog/manifest.json`);
};

main().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});
