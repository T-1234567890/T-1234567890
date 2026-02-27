export const sleep = (ms, signal) =>
  new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(signal.reason ?? new Error("aborted"));
    const t = setTimeout(resolve, ms);
    if (!signal) return;
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(t);
        reject(signal.reason ?? new Error("aborted"));
      },
      { once: true },
    );
  });

const jittered = (baseMs, jitterMs) => {
  if (!jitterMs) return baseMs;
  const delta = (Math.random() * 2 - 1) * jitterMs;
  return Math.max(0, Math.round(baseMs + delta));
};

export async function typeText({
  getText,
  setText,
  text,
  baseDelayMs,
  jitterMs = 0,
  signal,
}) {
  for (const ch of text) {
    if (signal?.aborted) throw signal.reason ?? new Error("aborted");
    setText(getText() + ch);
    await sleep(jittered(baseDelayMs, jitterMs), signal);
  }
}

export async function eraseText({
  getText,
  setText,
  count,
  baseDelayMs,
  jitterMs = 0,
  signal,
}) {
  for (let i = 0; i < count; i += 1) {
    if (signal?.aborted) throw signal.reason ?? new Error("aborted");
    const cur = getText();
    setText(cur.slice(0, Math.max(0, cur.length - 1)));
    await sleep(jittered(baseDelayMs, jitterMs), signal);
  }
}

export function createCyclingTypewriter({
  el,
  phrases,
  typeDelayMs = 70,
  eraseDelayMs = 40,
  pauseMs = 650,
}) {
  let controller = null;
  let running = false;
  let phraseIndex = 0;

  const set = (t) => {
    el.textContent = t;
  };
  const get = () => el.textContent ?? "";

  const loop = async (signal) => {
    while (!signal.aborted) {
      const next = phrases[phraseIndex % phrases.length] ?? "";
      phraseIndex += 1;

      await typeText({
        getText: get,
        setText: set,
        text: next,
        baseDelayMs: typeDelayMs,
        jitterMs: 6,
        signal,
      });

      await sleep(pauseMs, signal);

      await eraseText({
        getText: get,
        setText: set,
        count: next.length,
        baseDelayMs: eraseDelayMs,
        jitterMs: 4,
        signal,
      });

      await sleep(240, signal);
    }
  };

  return {
    start() {
      if (running) return;
      running = true;
      controller = new AbortController();
      set("");
      loop(controller.signal).catch(() => {});
    },
    stop() {
      if (!running) return;
      running = false;
      controller?.abort();
      controller = null;
    },
  };
}

export function createHumanTyper({ el }) {
  let controller = null;
  let running = false;

  const set = (t) => {
    el.textContent = t;
  };
  const get = () => el.textContent ?? "";

  const type = async (text, { base = 48, jitter = 26, signal } = {}) => {
    await typeText({
      getText: get,
      setText: set,
      text,
      baseDelayMs: base,
      jitterMs: jitter,
      signal,
    });
  };

  const erase = async (count, { base = 26, jitter = 14, signal } = {}) => {
    await eraseText({
      getText: get,
      setText: set,
      count,
      baseDelayMs: base,
      jitterMs: jitter,
      signal,
    });
  };

  return {
    start(run) {
      if (running) return;
      running = true;
      controller = new AbortController();
      set("");
      run({
        signal: controller.signal,
        type,
        erase,
        set,
        get,
        sleep: (ms) => sleep(ms, controller.signal),
      }).catch(() => {});
    },
    stop() {
      if (!running) return;
      running = false;
      controller?.abort();
      controller = null;
    },
  };
}

