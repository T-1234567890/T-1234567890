const manifestPath = "/blog/manifest.json";

const getActiveLang = () =>
  document.documentElement?.dataset?.lang === "zh" ? "zh" : "en";

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const stripFrontMatter = (md) => {
  const text = md.replace(/\r\n?/g, "\n");
  if (!text.startsWith("---\n")) return text;
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) return text;
  return text.slice(end + 5);
};

const inlineMd = (text) => {
  let out = escapeHtml(text);
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*(.+?)\*/g, "<em>$1</em>");
  out = out.replace(/`(.+?)`/g, "<code>$1</code>");
  out = out.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  return out;
};

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

    if (line.startsWith("```")) {
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

    if (!line.trim()) {
      closeList();
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      html += `<h${level}>${inlineMd(headingMatch[2])}</h${level}>`;
      continue;
    }

    if (line.trim().startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inlineMd(line.trim().slice(2))}</li>`;
      continue;
    }

    closeList();
    html += `<p>${inlineMd(line.trim())}</p>`;
  }

  if (inList) html += "</ul>";
  if (inCode) html += "</code></pre>";
  return html;
};

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

const getSlugFromPath = () => {
  const fromAttr = document.body?.dataset?.slug;
  if (fromAttr) return fromAttr;

  const clean = window.location.pathname.replace(/\/+$/, "");
  const parts = clean.split("/").filter(Boolean);
  const blogIndex = parts.indexOf("blog");
  if (blogIndex === -1) return null;
  return parts[blogIndex + 1] || null;
};

const renderTags = (tagsEl, tags) => {
  tagsEl.innerHTML = "";
  if (!Array.isArray(tags) || !tags.length) return;
  for (const t of tags) {
    const span = document.createElement("span");
    span.className = "pill";
    span.textContent = t;
    tagsEl.appendChild(span);
  }
};

const main = async () => {
  const bodyEl = document.getElementById("postBody");
  const titleEl = document.getElementById("postTitle");
  const metaEl = document.getElementById("postMeta");
  const tagsEl = document.getElementById("postTags");

  if (!bodyEl) return;

  const slug = getSlugFromPath();
  if (!slug) {
    bodyEl.innerHTML = '<p class="muted">Post not found.</p>';
    return;
  }

  try {
    const manifestRes = await fetch(manifestPath);
    if (!manifestRes.ok) throw new Error("manifest fetch failed");
    const manifest = await manifestRes.json();

    const lang = getActiveLang();
    const meta =
      manifest.find((p) => p.slug === slug && p.lang === lang) ??
      manifest.find((p) => p.slug === slug);
    if (!meta) {
      bodyEl.innerHTML = '<p class="muted">Post not found.</p>';
      return;
    }

    if (titleEl) titleEl.textContent = meta.title || meta.slug;
    if (metaEl) metaEl.textContent = fmtDate(meta.date, meta.lang);
    if (tagsEl) renderTags(tagsEl, meta.tags);
    document.title = `${meta.title || meta.slug} — Blog`;

    const postRes = await fetch(meta.source);
    if (!postRes.ok) {
      bodyEl.innerHTML = '<p class="muted">This post could not be loaded.</p>';
      return;
    }

    const md = await postRes.text();
    bodyEl.innerHTML = mdToHtml(stripFrontMatter(md));
  } catch {
    bodyEl.innerHTML = '<p class="muted">Unable to load this post right now.</p>';
  }
};

main();

// Re-render the post when the existing top-right language toggle is clicked.
const langBtn = document.querySelector(".nav__lang");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    setTimeout(main, 0);
  });
}
