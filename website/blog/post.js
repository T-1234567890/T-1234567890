import MarkdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import markdownItTaskLists from "markdown-it-task-lists";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
import plaintext from "highlight.js/lib/languages/plaintext";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";
import swift from "highlight.js/lib/languages/swift";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { addEnglishOnlyBlogTip } from "./language-tip.js";

const manifestPath = "/blog/manifest.json";

const getActiveLang = () =>
  document.documentElement?.dataset?.lang === "zh" ? "zh" : "en";

const readerStrings = {
  en: {
    preferences: "Reading preferences",
    font: "Font",
    fontGroup: "Article font",
    size: "Size",
    sizeGroup: "Article font size",
    readingProgress: "Reading progress",
    copy: "Copy",
    copied: "Copied",
    copyError: "Unable to copy",
    notFound: "Post not found.",
    postLoadError: "This post could not be loaded.",
    loadError: "Unable to load this post right now.",
  },
  zh: {
    preferences: "阅读设置",
    font: "字体",
    fontGroup: "文章字体",
    size: "字号",
    sizeGroup: "文章字号",
    readingProgress: "阅读进度",
    copy: "复制",
    copied: "已复制",
    copyError: "无法复制",
    notFound: "未找到文章。",
    postLoadError: "无法加载这篇文章。",
    loadError: "暂时无法加载这篇文章。",
  },
};

export const stripFrontMatter = (md) => {
  const text = md.replace(/\r\n?/g, "\n");
  if (!text.startsWith("---\n")) return text;
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) return text;
  return text.slice(end + 5);
};

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("python", python);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("swift", swift);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerAliases(["sh", "shell", "zsh"], { languageName: "bash" });
hljs.registerAliases(["js", "jsx"], { languageName: "javascript" });
hljs.registerAliases(["ts", "tsx"], { languageName: "typescript" });
hljs.registerAliases(["html", "svg"], { languageName: "xml" });
hljs.registerAliases(["text", "txt"], { languageName: "plaintext" });

const markdownRenderer = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: false,
  typographer: false,
});

markdownRenderer.use(markdownItTaskLists, {
  enabled: false,
  label: true,
  labelAfter: true,
});
markdownRenderer.use(markdownItFootnote);

const defaultFenceRenderer = markdownRenderer.renderer.rules.fence;
markdownRenderer.renderer.rules.fence = (tokens, index, options, env, self) => {
  const token = tokens[index];
  const language = token.info.trim().split(/\s+/u)[0]?.toLowerCase() || "";
  const knownLanguage = language && hljs.getLanguage(language);
  const highlighted = knownLanguage
    ? hljs.highlight(token.content, { language, ignoreIllegals: true }).value
    : markdownRenderer.utils.escapeHtml(token.content);
  const languageLabel = language
    ? `<span class="post-code-block__language">${markdownRenderer.utils.escapeHtml(language)}</span>`
    : '<span class="post-code-block__language">text</span>';
  const languageClass = language
    ? ` language-${markdownRenderer.utils.escapeHtml(language)}`
    : "";

  if (!token.content && !language) {
    return defaultFenceRenderer(tokens, index, options, env, self);
  }

  return `<div class="post-code-block">
    <div class="post-code-block__toolbar">
      ${languageLabel}
      <button class="post-code-block__copy" type="button">Copy</button>
    </div>
    <pre><code class="hljs${languageClass}">${highlighted}</code></pre>
  </div>`;
};

markdownRenderer.renderer.rules.hr = () => '<hr class="post-content-rule" />\n';

const defaultImageRenderer =
  markdownRenderer.renderer.rules.image ||
  ((tokens, index, options, env, self) => self.renderToken(tokens, index, options));
markdownRenderer.renderer.rules.image = (tokens, index, options, env, self) => {
  tokens[index].attrSet("loading", "lazy");
  tokens[index].attrSet("decoding", "async");
  return defaultImageRenderer(tokens, index, options, env, self);
};

markdownRenderer.renderer.rules.table_open = () =>
  '<div class="post-table-wrap" role="region" aria-label="Scrollable table" tabindex="0"><table>\n';
markdownRenderer.renderer.rules.table_close = () => "</table></div>\n";

export const renderMarkdown = (markdownText) =>
  markdownRenderer.render(stripFrontMatter(markdownText));

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

const readingFontStorageKey = "blog-reading-font";
const readingFontChoices = [
  {
    value: "system",
    label: { en: "System", zh: "系统" },
    ariaLabel: { en: "Use the system font", zh: "使用系统字体" },
  },
  {
    value: "serif",
    label: { en: "Serif", zh: "衬线" },
    ariaLabel: { en: "Use Georgia", zh: "使用 Georgia 衬线字体" },
  },
  {
    value: "mono",
    label: { en: "Mono", zh: "等宽" },
    ariaLabel: { en: "Use JetBrains Mono", zh: "使用 JetBrains Mono 等宽字体" },
  },
];
const readingSizeStorageKey = "blog-reading-size";
const readingSizeChoices = [
  {
    value: "small",
    label: { en: "Small", zh: "小" },
    ariaLabel: { en: "Use small article text", zh: "使用小号文章文字" },
  },
  {
    value: "default",
    label: { en: "Default", zh: "默认" },
    ariaLabel: { en: "Use default article text", zh: "使用默认文章文字" },
  },
  {
    value: "large",
    label: { en: "Large", zh: "大" },
    ariaLabel: { en: "Use large article text", zh: "使用大号文章文字" },
  },
];

const readStoredReadingFont = () => {
  try {
    const stored = localStorage.getItem(readingFontStorageKey);
    return readingFontChoices.some((choice) => choice.value === stored)
      ? stored
      : "system";
  } catch {
    return "system";
  }
};

const storeReadingFont = (font) => {
  try {
    localStorage.setItem(readingFontStorageKey, font);
  } catch {
    // The selected font still applies for this page when storage is unavailable.
  }
};

const readStoredReadingSize = () => {
  try {
    const stored = localStorage.getItem(readingSizeStorageKey);
    return readingSizeChoices.some((choice) => choice.value === stored)
      ? stored
      : "default";
  } catch {
    return "default";
  }
};

const storeReadingSize = (size) => {
  try {
    localStorage.setItem(readingSizeStorageKey, size);
  } catch {
    // The selected size still applies for this page when storage is unavailable.
  }
};

const initReadingFontPicker = (articleEl, lang) => {
  const headerEl = document.querySelector(
    'body[data-view="blog-post"] .page-header',
  );
  if (!headerEl) return;

  const pickerEl = document.createElement("div");
  pickerEl.className = "post-font-switcher";
  pickerEl.setAttribute("role", "group");
  pickerEl.setAttribute("aria-label", readerStrings[lang].preferences);

  const labelEl = document.createElement("span");
  labelEl.className = "post-font-switcher__label";
  labelEl.textContent = readerStrings[lang].font;
  pickerEl.append(labelEl);

  const optionsEl = document.createElement("div");
  optionsEl.className = "post-font-switcher__options";
  optionsEl.setAttribute("role", "group");
  optionsEl.setAttribute("aria-label", readerStrings[lang].fontGroup);
  pickerEl.append(optionsEl);

  const buttons = readingFontChoices.map((choice) => {
    const buttonEl = document.createElement("button");
    buttonEl.className = "post-font-switcher__button";
    buttonEl.type = "button";
    buttonEl.dataset.fontChoice = choice.value;
    buttonEl.textContent = choice.label[lang];
    buttonEl.title = choice.ariaLabel[lang];
    buttonEl.setAttribute("aria-label", choice.ariaLabel[lang]);
    optionsEl.append(buttonEl);
    return buttonEl;
  });

  const separatorEl = document.createElement("span");
  separatorEl.className = "post-font-switcher__separator";
  separatorEl.setAttribute("aria-hidden", "true");
  pickerEl.append(separatorEl);

  const sizeLabelEl = document.createElement("span");
  sizeLabelEl.className = "post-font-switcher__label";
  sizeLabelEl.textContent = readerStrings[lang].size;
  pickerEl.append(sizeLabelEl);

  const sizeOptionsEl = document.createElement("div");
  sizeOptionsEl.className = "post-font-switcher__options";
  sizeOptionsEl.setAttribute("role", "group");
  sizeOptionsEl.setAttribute("aria-label", readerStrings[lang].sizeGroup);
  pickerEl.append(sizeOptionsEl);

  const sizeButtons = readingSizeChoices.map((choice) => {
    const buttonEl = document.createElement("button");
    buttonEl.className = "post-font-switcher__button";
    buttonEl.type = "button";
    buttonEl.dataset.sizeChoice = choice.value;
    buttonEl.textContent = choice.label[lang];
    buttonEl.title = choice.ariaLabel[lang];
    buttonEl.setAttribute("aria-label", choice.ariaLabel[lang]);
    sizeOptionsEl.append(buttonEl);
    return buttonEl;
  });

  const applyFont = (font, persist = true) => {
    articleEl.dataset.readingFont = font;
    for (const buttonEl of buttons) {
      buttonEl.setAttribute(
        "aria-pressed",
        buttonEl.dataset.fontChoice === font ? "true" : "false",
      );
    }
    if (persist) storeReadingFont(font);
  };

  const applySize = (size, persist = true) => {
    articleEl.dataset.readingSize = size;
    for (const buttonEl of sizeButtons) {
      buttonEl.setAttribute(
        "aria-pressed",
        buttonEl.dataset.sizeChoice === size ? "true" : "false",
      );
    }
    if (persist) storeReadingSize(size);
  };

  for (const buttonEl of buttons) {
    buttonEl.addEventListener("click", () => {
      applyFont(buttonEl.dataset.fontChoice || "system");
    });
  }

  for (const buttonEl of sizeButtons) {
    buttonEl.addEventListener("click", () => {
      applySize(buttonEl.dataset.sizeChoice || "default");
    });
  }

  headerEl.append(pickerEl);
  applyFont(readStoredReadingFont(), false);
  applySize(readStoredReadingSize(), false);
};

const initReadingProgress = (articleEl, lang) => {
  const progressEl = document.createElement("div");
  progressEl.className = "post-reading-progress";
  progressEl.setAttribute("role", "progressbar");
  progressEl.setAttribute("aria-label", readerStrings[lang].readingProgress);
  progressEl.setAttribute("aria-valuemin", "0");
  progressEl.setAttribute("aria-valuemax", "100");
  progressEl.setAttribute("aria-valuenow", "0");

  const fillEl = document.createElement("span");
  fillEl.className = "post-reading-progress__fill";
  progressEl.append(fillEl);
  document.body.append(progressEl);

  let animationFrame = 0;
  const scrollRoot = document.scrollingElement || document.documentElement;
  const footerEl = document.getElementById("siteFooter");

  const update = () => {
    animationFrame = 0;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const articleRect = articleEl.getBoundingClientRect();
    const readingStartLine = viewportHeight * 0.75;
    const readingEndLine = viewportHeight * 0.25;
    const readingDistance = Math.max(
      1,
      articleRect.height + readingStartLine - readingEndLine,
    );
    let progress = Math.min(
      1,
      Math.max(0, (readingStartLine - articleRect.top) / readingDistance),
    );
    const pageBottom = footerEl?.getBoundingClientRect().bottom;
    const atPageBottom = Number.isFinite(pageBottom)
      ? pageBottom <= viewportHeight + 4
      : false;
    if (atPageBottom) progress = 1;
    const visualProgress = Math.max(0.04, progress);

    fillEl.style.height = `${(visualProgress * 100).toFixed(2)}%`;
    progressEl.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  };

  const queueUpdate = () => {
    if (animationFrame) return;
    animationFrame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", queueUpdate, { passive: true });
  document.addEventListener("scroll", queueUpdate, {
    passive: true,
    capture: true,
  });
  if (scrollRoot !== document.documentElement) {
    scrollRoot.addEventListener("scroll", queueUpdate, { passive: true });
  }
  window.addEventListener("resize", queueUpdate);

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(queueUpdate);
    resizeObserver.observe(articleEl);
  }

  return queueUpdate;
};

export const initCodeCopyButtons = (articleEl, lang) => {
  const strings = readerStrings[lang];
  articleEl.addEventListener("click", async (event) => {
    const buttonEl = event.target.closest(".post-code-block__copy");
    if (!buttonEl) return;

    const codeEl = buttonEl.closest(".post-code-block")?.querySelector("code");
    if (!codeEl) return;

    try {
      await navigator.clipboard.writeText(codeEl.textContent || "");
      buttonEl.textContent = strings.copied;
      buttonEl.classList.add("is-copied");
      window.setTimeout(() => {
        buttonEl.textContent = strings.copy;
        buttonEl.classList.remove("is-copied");
      }, 1600);
    } catch {
      buttonEl.textContent = strings.copyError;
      window.setTimeout(() => {
        buttonEl.textContent = strings.copy;
      }, 1600);
    }
  });
};

const main = async () => {
  const bodyEl = document.getElementById("postBody");
  const titleEl = document.getElementById("postTitle");
  const metaEl = document.getElementById("postMeta");

  if (!bodyEl) return;
  const slug = getSlugFromPath();
  const activeLang = getActiveLang();
  const strings = readerStrings[activeLang];

  addEnglishOnlyBlogTip();

  initReadingFontPicker(bodyEl, activeLang);
  initCodeCopyButtons(bodyEl, activeLang);
  const updateReadingProgress = initReadingProgress(bodyEl, activeLang);

  if (!slug) {
    bodyEl.innerHTML = `<p class="muted">${strings.notFound}</p>`;
    updateReadingProgress();
    return;
  }

  try {
    const manifestRes = await fetch(manifestPath);
    if (!manifestRes.ok) throw new Error("manifest fetch failed");
    const manifest = await manifestRes.json();

    const meta = manifest.find((p) => p.slug === slug && p.lang === "en");
    if (!meta) {
      bodyEl.innerHTML = `<p class="muted">${strings.notFound}</p>`;
      updateReadingProgress();
      return;
    }

    if (titleEl) {
      titleEl.textContent = meta.title || meta.slug;
      titleEl.lang = "en";
    }
    if (metaEl) metaEl.textContent = fmtDate(meta.date, activeLang);
    document.title = `${meta.title || meta.slug} - Blog`;

    const postRes = await fetch(meta.source);
    if (!postRes.ok) {
      bodyEl.innerHTML = `<p class="muted">${strings.postLoadError}</p>`;
      updateReadingProgress();
      return;
    }

    const md = await postRes.text();
    bodyEl.lang = "en";
    bodyEl.innerHTML = renderMarkdown(md);
    for (const copyButtonEl of bodyEl.querySelectorAll(
      ".post-code-block__copy",
    )) {
      copyButtonEl.textContent = strings.copy;
    }
    updateReadingProgress();
  } catch {
    bodyEl.innerHTML = `<p class="muted">${strings.loadError}</p>`;
    updateReadingProgress();
  }
};

if (typeof document !== "undefined") main();
