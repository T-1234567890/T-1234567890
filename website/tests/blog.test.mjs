import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { matchesQuery, paginatePosts, pickEnglishPosts } from "../blog/blog.js";
import { renderMarkdown } from "../blog/post.js";

const currentDir = dirname(fileURLToPath(import.meta.url));

test("the Markdown renderer supports the practical Blog feature set safely", async () => {
  const markdown = await readFile(
    join(currentDir, "fixtures", "markdown-features.md"),
    "utf8",
  );
  const html = renderMarkdown(markdown);

  for (let level = 1; level <= 6; level += 1) {
    assert.match(html, new RegExp(`<h${level}>Heading ${level}</h${level}>`));
  }
  assert.match(html, /<strong>bold<\/strong>/);
  assert.match(html, /<em>italic<\/em>/);
  assert.match(html, /<s>strikethrough<\/s>/);
  assert.match(html, /<code>inline code<\/code>/);
  assert.match(html, /class="hljs language-swift"/);
  assert.match(html, /class="hljs language-typescript"/);
  assert.match(html, /class="hljs language-rust"/);
  assert.match(html, /class="hljs language-python"/);
  assert.match(html, /post-code-block__copy/);
  assert.match(html, /href="https:\/\/example\.com\/docs"/);
  assert.match(html, /<ol>/);
  assert.match(html, /<ul class="contains-task-list">/);
  assert.match(html, /task-list-item-checkbox/);
  assert.match(html, /<blockquote>/);
  assert.match(html, /post-table-wrap/);
  assert.match(html, /<table>/);
  assert.match(html, /alt="中文替代文字"/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /class="post-content-rule"/);
  assert.match(html, /class="footnote-ref"/);
  assert.match(html, /中文段落 mixed with English、中文标点/);
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /Markdown feature fixture/);
});

test("pagination is applied after selecting canonical English posts", () => {
  const posts = Array.from({ length: 15 }, (_, index) => ({
    slug: `post-${index + 1}`,
    lang: "en",
    date: `2026-08-${String(15 - index).padStart(2, "0")}`,
  }));
  posts.push({ slug: "post-1", lang: "zh", date: "2026-08-15" });

  const englishPosts = pickEnglishPosts(posts);
  assert.equal(englishPosts.length, 15);

  const secondPage = paginatePosts(englishPosts, 2);
  assert.equal(secondPage.page, 2);
  assert.equal(secondPage.pageCount, 3);
  assert.equal(secondPage.posts.length, 6);

  const finalPage = paginatePosts(englishPosts, 3);
  assert.equal(finalPage.posts.length, 3);
});

test("search filters the complete result set before pagination", () => {
  const posts = Array.from({ length: 14 }, (_, index) => ({
    slug: `post-${index + 1}`,
    lang: "en",
    date: `2026-07-${String(14 - index).padStart(2, "0")}`,
    title: index < 8 ? `Matching post ${index + 1}` : `Other post ${index + 1}`,
    summary: "",
  }));

  const matches = pickEnglishPosts(posts).filter((post) =>
    matchesQuery(post, "matching"),
  );
  const secondPage = paginatePosts(matches, 2);

  assert.equal(matches.length, 8);
  assert.equal(secondPage.pageCount, 2);
  assert.equal(secondPage.posts.length, 2);
});

test("all existing Blog Markdown files render without regressions", async () => {
  const postsDir = join(currentDir, "..", "blog", "posts");
  const filenames = (await readdir(postsDir)).filter((name) => name.endsWith(".md"));

  assert.ok(filenames.length > 0);
  for (const filename of filenames) {
    const markdown = await readFile(join(postsDir, filename), "utf8");
    const html = renderMarkdown(markdown);
    assert.ok(html.trim().length > 0, `${filename} should render content`);
    assert.doesNotMatch(html, /<script\b/i, `${filename} must not enable raw scripts`);
  }
});
