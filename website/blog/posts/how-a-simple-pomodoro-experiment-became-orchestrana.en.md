---
title: How a Simple Pomodoro Experiment Became Orchestrana
date: 2026-05-16
tags: [orchestrana, productivity, workflow, macos, development]
summary: How a small AI-assisted Pomodoro experiment slowly evolved into a native macOS execution-focused workflow system.
lang: en
slug: how-a-simple-pomodoro-experiment-became-orchestrana
---

# How a Simple Pomodoro Experiment Became Orchestrana

Orchestrana did not begin as a serious startup idea.

Originally, it was just a small experiment. Around a year ago, when AI-assisted coding tools were rapidly improving, I wanted to test how far they could really go in practical software development. One of the simplest benchmark-style ideas at the time was always the same:

Build a Pomodoro timer.

So that was the beginning.

The earliest versions of Orchestrana were extremely simple. Just a timer. A few buttons. Basic focus sessions. Nothing special.

But after half a year later when I restarted this project, I slowly realized something important:

The real problem was never the timer.

Most productivity apps are very good at organizing tasks, sorting lists, planning schedules, and creating systems. But surprisingly few tools actually help people start working, stay focused, and continue unfinished work over time.

That realization slowly changed the direction of the project.

Instead of becoming "another Pomodoro app," Orchestrana gradually evolved into something much larger: a workflow and execution system focused on helping users move from planning into actual focused work.

The earliest prototype was a single-process Python + Tkinter app in the 0.4.x era, and the next legacy system used Tauri + Svelte with a Python Pomodoro engine and JSON-based IPC in versions 0.5.x to 0.7.x.

That stack worked, but it added unnecessary complexity on macOS and limited deeper system integration, so the project eventually moved to native Swift for clarity, performance, and long-term maintainability.

That decision was not just technical.

Deep work simply felt more natural on desktop systems. Focus sessions, planning, context continuity, and long-form workflows all felt significantly better on macOS than on mobile devices.

At the same time, I also became increasingly interested in UI hierarchy, workflow systems, and the feeling of calmness inside software. The project slowly stopped being about "productivity" and became more about execution and continuity.

That is also where features like Flow Mode, Goals, session continuity, and workspace systems started to emerge.

AI also played an important role throughout development, but not in the way many people imagine. AI accelerated experimentation, iteration, and prototyping, but the hardest part was never generating code. The difficult part was product direction, workflow design, backend systems, App Store review, architecture decisions, and continuously refining the product experience.

Over time, Orchestrana slowly transformed from a small Pomodoro experiment into a real software product with subscriptions, backend infrastructure, AI-assisted systems, workflow management, and a long-term roadmap.

Today, the project is still evolving.

The next major direction includes Notes, Knowledge, Goals, workflow continuity, and deeper execution-focused systems designed to help users not only organize work, but actually continue and finish it.

In many ways, building Orchestrana also changed my understanding of productivity itself.

The problem was never "how to organize more."

The real problem was always:

How do we consistently continue meaningful work over time?

That question is still shaping the product today.
