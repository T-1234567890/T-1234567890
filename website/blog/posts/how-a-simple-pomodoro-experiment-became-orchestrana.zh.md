---
title: 一个简单的番茄钟实验，为什么最后变成了 Orchestrana
date: 2026-05-16
tags: [orchestrana, productivity, workflow, macos, development]
summary: 一个原本只是测试 AI 辅助开发能力的 Pomodoro 小实验，是如何逐渐演化成一个原生 macOS 工作流与执行系统的。
lang: zh
slug: how-a-simple-pomodoro-experiment-became-orchestrana
---

# 一个简单的番茄钟实验，为什么最后变成了 Orchestrana

Orchestrana 一开始并不是一个正式的创业项目。

最早的时候，它只是一个很小的实验。大概一年前，AI 辅助开发工具开始快速发展，我当时很好奇：这些工具在真正的软件开发里到底能做到什么程度？

而那个时候，最经典、也最简单的测试项目，几乎永远都是：

做一个 Pomodoro Timer。

所以 Orchestrana 最初的起点，其实只是一个简单的番茄钟。

最早的版本非常简单。只有计时器、几个按钮，以及最基础的专注 Session。几乎没有什么特别的地方。

但在不断自己使用的过程中，我慢慢发现了一件事：

真正的问题，从来都不是 Timer 本身。

很多 productivity app 非常擅长组织任务、管理列表、规划日程、建立系统，但真正能帮助用户“开始工作”、“持续专注”以及“把未完成的事情继续推进”的工具，其实并不多。

在半年后当我重新启动这个项目时，这个认知，慢慢改变了整个产品的方向。

Orchestrana 逐渐不再只是“另一个番茄钟”，而开始变成一个更偏向 workflow 与 execution 的系统。它真正想解决的问题，不再只是计时，而是如何帮助用户从“计划”真正进入“执行”。

最早的原型是 0.4.x 阶段的 Python + Tkinter 单进程桌面应用，之后 0.5.x 到 0.7.x 的 legacy system 使用了 Tauri + Svelte，加上 Python Pomodoro engine 和基于 JSON 的 IPC。

这个架构可以运行，但在 macOS 上增加了不必要的复杂度，也限制了更深层的系统集成，所以项目最终迁移到原生 Swift，以获得更清晰的结构、更好的性能和更长期的可维护性。

这个决定其实不只是技术原因。

深度工作本身就更适合桌面端。无论是专注 Session、长期工作流、规划、上下文连续性，还是复杂任务管理，在 macOS 上都会自然很多。

与此同时，我也开始越来越在意 UI hierarchy、workflow systems，以及软件里的“calm feeling”。这个产品慢慢不再只是一个 productivity tool，而开始更偏向一个 execution system。

也是从这个阶段开始，Flow Mode、Goals、Session Continuity、Workspace 等概念逐渐形成。

AI 在整个开发过程中也发挥了很大的作用，但并不是很多人想象中的那种“一键生成产品”。AI 更多是在加速实验、原型开发与迭代，而真正困难的部分其实一直都不是代码本身。

真正困难的，是产品方向、workflow 设计、backend 系统、App Store 审核、架构决策，以及不断调整整个产品体验。

慢慢地，这个最初只是测试 AI coding 的小实验，最后变成了一个真正上线的 macOS 软件产品，拥有订阅系统、后端基础设施、AI workflow、以及长期产品路线。

而今天，Orchestrana 依然还在继续演化。

后续的方向包括 Notes、Knowledge、Goals、workflow continuity，以及更深层的 execution-focused 系统，希望它最终能帮助用户不只是“组织工作”，而是真正长期地持续推进重要的事情。

某种程度上，做 Orchestrana 这件事，也改变了我自己对 productivity 的理解。

问题从来不是：

“怎么组织更多事情。”

真正的问题一直都是：

“怎么长期持续地完成真正重要的工作。”

而这个问题，也仍然在持续影响着 Orchestrana 后续的发展方向。
