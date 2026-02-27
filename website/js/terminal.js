import { createHumanTyper } from "./typing.js";

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function createTerminalAnimator({ textEl }) {
  const typer = createHumanTyper({ el: textEl });

  const run = async ({ signal, type, erase, set, sleep }) => {
    // The content is intentionally "human": slight variability + occasional corrections.
    const script = [
      async () => {
        await type("Hello World", { base: 46, jitter: 24, signal });
        await sleep(520);
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("$ ls", { base: 44, jitter: 20, signal });
        await sleep(pick([240, 320, 410]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("$ pwd", { base: 42, jitter: 18, signal });
        await sleep(pick([260, 380]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("$ cd projects", { base: 44, jitter: 18, signal });
        await sleep(pick([260, 340, 520]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("$ git status", { base: 46, jitter: 18, signal });
        await sleep(pick([260, 360, 520]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("$ git pull", { base: 45, jitter: 18, signal });
        await sleep(pick([300, 520, 760]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        // Small correction: "de" -> backspace -> "dev"
        await type("$ npm run de", { base: 46, jitter: 20, signal });
        await sleep(pick([120, 180]));
        await erase(1, { base: 30, jitter: 14, signal });
        await type("v", { base: 52, jitter: 18, signal });
        await sleep(pick([280, 520]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        // Small correction: ".pu" -> backspace -> ".py"
        await type("python main.pu", { base: 46, jitter: 22, signal });
        await sleep(pick([110, 160]));
        await erase(1, { base: 28, jitter: 12, signal });
        await type("y", { base: 52, jitter: 18, signal });
        await sleep(pick([260, 440, 620]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("main.rs", { base: 42, jitter: 18, signal });
        await sleep(pick([180, 260]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("index.html", { base: 42, jitter: 18, signal });
        await sleep(pick([180, 260]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("AppDelegate.swift", { base: 42, jitter: 18, signal });
        await sleep(pick([180, 260]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("GoogleService-Info.plist", { base: 41, jitter: 18, signal });
        await sleep(pick([200, 320]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("$ code .", { base: 45, jitter: 16, signal });
        await sleep(pick([260, 420, 640]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("README.md", { base: 42, jitter: 18, signal });
        await sleep(pick([180, 260]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        // Small correction: "whoam" -> backspace -> "whoami"
        await type("$ whoam", { base: 46, jitter: 16, signal });
        await sleep(pick([140, 200]));
        await type("i", { base: 62, jitter: 16, signal });
        await sleep(pick([260, 520]));
        await type("\n", { base: 0, jitter: 0, signal });
      },
      async () => {
        await type("$ _", { base: 38, jitter: 12, signal });
        await sleep(1200);
      },
    ];

    // Loop forever: type script, pause, then clear quickly (no flashing).
    // Clearing by backspacing preserves the "typed" feel.
    while (!signal.aborted) {
      for (const step of script) {
        if (signal.aborted) return;
        await step();
      }

      await sleep(pick([820, 980, 1160]));

      const current = textEl.textContent ?? "";
      const clearCount = Math.min(current.length, 5200);
      await erase(clearCount, { base: 10, jitter: 6, signal });
      set("");
      await sleep(pick([220, 300, 420]));
    }
  };

  return {
    start() {
      typer.start(run);
    },
    stop() {
      typer.stop();
    },
  };
}

