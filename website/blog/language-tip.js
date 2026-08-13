export const addEnglishOnlyBlogTip = () => {
  if (document.documentElement?.dataset?.lang !== "zh") return false;
  if (document.querySelector(".blog-language-tip")) return true;

  const headerEl = document.querySelector("main .page-shell .page-header");
  if (!headerEl) return false;

  const tipEl = document.createElement("aside");
  tipEl.className = "blog-language-tip";
  tipEl.setAttribute("role", "note");
  tipEl.setAttribute("aria-label", "博客语言提示");
  const textEl = document.createElement("p");
  textEl.textContent = "博客文章目前仅提供英文版本。";
  tipEl.append(textEl);

  const controlsEl = document.querySelector(".blog-index .blog-controls");
  if (controlsEl) {
    controlsEl.append(tipEl);
  } else {
    headerEl.insertAdjacentElement("afterend", tipEl);
  }
  return true;
};
