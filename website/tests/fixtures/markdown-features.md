---
title: Markdown feature fixture
date: 2026-08-13
summary: Non-published renderer coverage.
lang: en
slug: markdown-feature-fixture
---

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Paragraph with **bold**, *italic*, ~~strikethrough~~, `inline code`, and Unicode ✦.

中文段落 mixed with English、中文标点，以及[中文链接](https://example.com/zh)。

Bare URL: https://example.com/docs

> 引用中的中文 text and **formatting**.

1. First
2. Second
   1. Nested ordered item
   2. Another nested item

- Parent
  - Nested unordered item
- [x] Done
- [ ] Not done

```swift
let greeting = "你好"
print(greeting)
```

```typescript
const greeting: string = "Hello";
```

```rust
fn main() {
    println!("你好");
}
```

```python
print("你好")
```

![中文替代文字](/assets/test-image.png)

| Language | Greeting |
| --- | --- |
| 中文 | 你好 |
| English | Hello |

---

Footnote reference.[^note]

[^note]: Footnote with 中文 and English.

<script>alert("unsafe")</script>
