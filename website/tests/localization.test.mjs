import assert from "node:assert/strict";
import test from "node:test";

import {
  buildLocalizedUrl,
  isLocalizedRoute,
  normalizeLocalizedPath,
} from "../js/controller.js";

test("localized legal document routes support directory and index.html URLs", () => {
  const routes = ["privacy", "legal-notices"];

  for (const route of routes) {
    assert.equal(isLocalizedRoute(`/${route}/`), true);
    assert.equal(isLocalizedRoute(`/${route}/index.html`), true);
    assert.equal(buildLocalizedUrl(`/${route}/`, "zh"), `/zh/${route}/`);
    assert.equal(
      buildLocalizedUrl(`/${route}/index.html`, "zh"),
      `/zh/${route}/`,
    );
    assert.equal(
      buildLocalizedUrl(`/zh/${route}/index.html`, "en"),
      `/${route}/`,
    );
  }
});

test("index.html path normalization keeps localized roots canonical", () => {
  assert.equal(normalizeLocalizedPath("/index.html"), "/");
  assert.equal(normalizeLocalizedPath("/zh/index.html"), "/zh");
  assert.equal(buildLocalizedUrl("/index.html", "zh"), "/zh/");
  assert.equal(buildLocalizedUrl("/zh/index.html", "en"), "/");
});
