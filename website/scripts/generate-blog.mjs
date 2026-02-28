import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "website", "blog");
const POSTS_DIR = path.join(BLOG_DIR, "posts");
const OUT_MANIFEST = path.join(BLOG_DIR, "manifest.json");

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

const parseTags = (raw) => {
  const s = raw.trim();
  if (!s) return [];

  // Expect: [a, b]
  if (s.startsWith("[") && s.endsWith("]")) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return [];
    return inner
      .split(",")
      .map((t) => stripQuotes(t.trim()))
      .filter(Boolean);
  }

  // Allow single tag string as fallback.
  return [stripQuotes(s)].filter(Boolean);
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

    if (key === "tags") data.tags = parseTags(rawVal);
    else data[key] = stripQuotes(rawVal);
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

  if (!Array.isArray(data.tags)) data.tags = [];

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
  return `<!doctype html>
<html lang="en" data-lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle} — Blog</title>
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
        <a class="nav__logo" href="/" aria-label="Home">
          <img src="/assets/logo.svg" alt="" width="28" height="28" />
        </a>

        <div class="nav__center">
          <a class="nav__link" href="/about/">About</a>
          <a class="nav__link" href="/blog/" aria-current="page">Blog</a>
          <a class="nav__link" href="/projects/">Projects</a>
        </div>

        <button class="nav__lang" type="button" aria-pressed="false">中文</button>
      </nav>
    </header>

    <main class="page">
      <div class="page-shell stack">
        <section class="page-header">
          <p class="eyebrow"><a href="/blog/" class="footer__link">Back to blog</a></p>
          <h1 class="page-title" id="postTitle">${safeTitle}</h1>
          <div class="post-meta" id="postMeta">—</div>
          <div class="btn-row" id="postTags" aria-label="Tags"></div>
        </section>

        <article id="postBody" class="post-body">
          <p class="muted">Loading post…</p>
        </article>
      </div>
    </main>

    <script type="module" src="/blog/post.js"></script>
    <script type="module" src="/js/main.js"></script>
  </body>
</html>
`;
};

const main = async () => {
  await fs.mkdir(POSTS_DIR, { recursive: true });

  const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  const mdFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name)
    .sort();

  const posts = [];
  const seenSlugs = new Set();

  for (const filename of mdFiles) {
    const fullPath = path.join(POSTS_DIR, filename);
    const md = await fs.readFile(fullPath, "utf8");

    const { data } = parseFrontMatter(md, fullPath);
    const fileSlug = path.basename(filename, ".md");

    if (fileSlug !== data.slug) {
      throw new Error(
        `Filename "${filename}" must match slug "${data.slug}" (expected ${data.slug}.md)`,
      );
    }

    if (seenSlugs.has(data.slug)) {
      throw new Error(`Duplicate slug "${data.slug}" found.`);
    }
    seenSlugs.add(data.slug);

    posts.push({
      title: data.title,
      date: data.date,
      tags: data.tags,
      summary: data.summary,
      lang: data.lang,
      slug: data.slug,
      source: `/blog/posts/${data.slug}.md`,
      url: `/blog/${data.slug}/`,
    });
  }

  posts.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug),
  );

  await fs.writeFile(OUT_MANIFEST, JSON.stringify(posts, null, 2) + "\n", "utf8");

  for (const post of posts) {
    const dir = path.join(BLOG_DIR, post.slug);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(
      path.join(dir, "index.html"),
      renderPostIndexHtml(post),
      "utf8",
    );
  }

  // Delete stale /blog/<slug>/ folders that look like generated post pages.
  const slugs = new Set(posts.map((p) => p.slug));
  const blogDirents = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  for (const d of blogDirents) {
    if (!d.isDirectory()) continue;
    if (d.name === "posts") continue;
    if (d.name === "vendor") continue;
    if (d.name.startsWith(".")) continue;

    const dir = path.join(BLOG_DIR, d.name);
    const maybeIndex = path.join(dir, "index.html");

    try {
      await fs.stat(maybeIndex);
    } catch {
      continue;
    }

    if (!slugs.has(d.name)) {
      await fs.rm(dir, { recursive: true, force: true });
    }
  }

  // Remove legacy manifest location if present.
  const legacy = path.join(POSTS_DIR, "manifest.json");
  await fs.rm(legacy, { force: true });

  console.log(`Generated ${posts.length} post page(s) + blog/manifest.json`);
};

main().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});

