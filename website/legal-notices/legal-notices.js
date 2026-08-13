import { initCodeCopyButtons, renderMarkdown } from "../blog/post.js";

const sourcePath = "/LEGAL_NOTICES.md";

const main = async () => {
  const bodyEl = document.getElementById("legalNoticesBody");
  if (!bodyEl) return;

  initCodeCopyButtons(bodyEl, "en");

  try {
    const response = await fetch(sourcePath);
    if (!response.ok) throw new Error("attribution notice fetch failed");

    bodyEl.innerHTML = renderMarkdown(await response.text());

    const repeatedDocumentTitle = bodyEl.querySelector(":scope > h1");
    if (repeatedDocumentTitle?.textContent.trim() === "Legal Notices") {
      repeatedDocumentTitle.remove();
    }
  } catch {
    bodyEl.innerHTML =
      '<p class="muted">Unable to load the legal notices right now.</p>';
  }
};

main();
