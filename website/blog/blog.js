const manifestPath = "/blog/posts/manifest.json";
const postsBase = "/blog/posts";

const fmtDate = (dateStr) => {
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const mdToHtml = (md) => {
  const lines = md.replace(/\r\n?/g, "\n").split("\n");
  let html = "";
  let inList = false;
  let inCode = false;

  const closeList = () => {
    if (inList) html += "</ul>";
    inList = false;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith("```") ) {
      if (inCode) {
        html += "</code></pre>";
        inCode = false;
      } else {
        closeList();
        inCode = true;
        html += "<pre><code>";
      }
      continue;
    }

    if (inCode) {
      html += `${escapeHtml(raw)}\n`;
      continue;
    }

    if (!line) {
      closeList();
      html += "";
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      html += `<h${level}>${inlineMd(text)}</h${level}>`;
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inlineMd(line.slice(2))}</li>`;
      continue;
    }

    closeList();
    html += `<p>${inlineMd(line)}</p>`;
  }

  if (inList) html += "</ul>";
  if (inCode) html += "</code></pre>";

  return html;
};

const inlineMd = (text) => {
  let out = escapeHtml(text);
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*(.+?)\*/g, "<em>$1</em>");
  out = out.replace(/`(.+?)`/g, "<code>$1</code>");
  out = out.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  return out;
};

const renderIndex = async () => {
  const listEl = document.getElementById("blogList");
  if (!listEl) return;

  try {
    const res = await fetch(manifestPath);
    const posts = await res.json();
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!posts.length) {
      listEl.innerHTML = '<p class="muted">No posts yet.</p>';
      return;
    }

    listEl.innerHTML = posts
      .map((post) => {
        const href = `/blog/${post.slug}/`;
        const title = post.title ?? post.slug;
        const excerpt = post.excerpt ?? "";
        return `
          <article class="post-card" role="listitem">
            <a class="post-card__title" href="${href}">${title}</a>
            <div class="post-card__meta">${fmtDate(post.date)}</div>
            <p class="post-card__excerpt">${excerpt}</p>
          </article>
        `;
      })
      .join("");
  } catch (err) {
    listEl.innerHTML = '<p class="muted">Unable to load posts right now.</p>';
  }
};

const getSlugFromPath = () => {
  const path = window.location.pathname.replace(/\/+$/, "");
  const parts = path.split("/").filter(Boolean);
  const blogIndex = parts.indexOf("blog");
  if (blogIndex === -1) return null;
  const slug = parts[blogIndex + 1];
  return slug || null;
};

const renderPost = async () => {
  const articleEl = document.getElementById("postBody");
  const titleEl = document.getElementById("postTitle");
  const metaEl = document.getElementById("postMeta");
  if (!articleEl) return;

  const slug = getSlugFromPath();
  if (!slug) {
    articleEl.innerHTML = '<p class="muted">Post not found.</p>';
    return;
  }

  try {
    const [manifestRes, postRes] = await Promise.all([
      fetch(manifestPath),
      fetch(`${postsBase}/${slug}.md`),
    ]);

    const manifest = await manifestRes.json();
    const meta = manifest.find((p) => p.slug === slug);
    if (meta) {
      titleEl.textContent = meta.title;
      metaEl.textContent = fmtDate(meta.date);
    }

    if (!postRes.ok) {
      articleEl.innerHTML = '<p class="muted">This post could not be loaded.</p>';
      return;
    }

    const md = await postRes.text();
    articleEl.innerHTML = mdToHtml(md);
  } catch (err) {
    articleEl.innerHTML = '<p class="muted">Unable to load this post right now.</p>';
  }
};

const view = document.body.dataset.view;
if (view === "blog-index") renderIndex();
if (view === "blog-post") renderPost();
