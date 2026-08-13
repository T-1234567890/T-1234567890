import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  siApple,
  siCss,
  siDavinciresolve,
  siGithub,
  siHtml5,
  siJavascript,
  siJetbrains,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siRust,
  siSwift,
  siTypescript,
  siXcode,
} from "simple-icons";
import Stack from "../Stack/Stack.jsx";
import "./InfoDashboard.css";

const QUOTES = [
  { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  {
    text: "I do open source because it’s fun and it works.",
    author: "Linus Torvalds",
  },
  {
    text: "Piracy is not a pricing issue. It’s a service issue.",
    author: "Gabe Newell",
  },
  { text: "Make something people want.", author: "Y Combinator" },
  { text: "Do things that don’t scale.", author: "Paul Graham" },
  { text: "You can delete more stuff than you think.", author: "Sam Altman" },
  {
    text: "My dream was actually just to have a computer some day.",
    author: "Steve Wozniak",
  },
  {
    text: "Invention is the root of all real value creation.",
    author: "Jeff Bezos",
  },
  {
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  {
    text: "Free software is a matter of liberty, not price.",
    author: "Richard Stallman",
  },
  {
    text: "Unbounded opportunity... limited only by your imagination.",
    author: "Tim Berners-Lee",
  },
  {
    text: "If they are good, they are still simple inside.",
    author: "Tim Berners-Lee",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Good design is as little design as possible.",
    author: "Dieter Rams",
  },
];

const DEVELOPMENT = [
  { label: "Swift", icon: siSwift, href: "https://www.swift.org/?utm_source=1234567890.dev" },
  { label: "Rust", icon: siRust, href: "https://www.rust-lang.org/?utm_source=1234567890.dev" },
  {
    label: "TypeScript",
    icon: siTypescript,
    href: "https://www.typescriptlang.org/?utm_source=1234567890.dev",
  },
  {
    label: "JavaScript",
    icon: siJavascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript?utm_source=1234567890.dev",
  },
  { label: "React", icon: siReact, href: "https://react.dev/?utm_source=1234567890.dev" },
  { label: "Next.js", icon: siNextdotjs, href: "https://nextjs.org/?utm_source=1234567890.dev" },
  { label: "Node.js", icon: siNodedotjs, href: "https://nodejs.org/?utm_source=1234567890.dev" },
  {
    label: "HTML",
    icon: siHtml5,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML?utm_source=1234567890.dev",
  },
  {
    label: "CSS",
    icon: siCss,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS?utm_source=1234567890.dev",
  },
];

const TOOLS = [
  {
    label: "Apple Ecosystem",
    icon: siApple,
    href: "https://www.apple.com/?utm_source=1234567890.dev",
  },
  {
    label: "Xcode",
    icon: siXcode,
    href: "https://developer.apple.com/xcode/?utm_source=1234567890.dev",
  },
  {
    label: "Git & GitHub",
    icon: siGithub,
    href: "https://github.com/?utm_source=1234567890.dev",
  },
  {
    label: "JetBrains",
    icon: siJetbrains,
    href: "https://www.jetbrains.com/?utm_source=1234567890.dev",
  },
  {
    label: "ChatGPT",
    iconSource: "/assets/icons/openai.svg",
    href: "https://chatgpt.com/?utm_source=1234567890.dev",
  },
  {
    label: "OpenRouter",
    iconSource:
      "https://unpkg.com/@lobehub/icons-static-svg@1.94.0/icons/openrouter.svg",
    href: "https://openrouter.ai/?utm_source=1234567890.dev",
  },
  {
    label: "Adobe Creative Cloud",
    href: "https://www.adobe.com/creativecloud.html?utm_source=1234567890.dev",
    iconSource:
      "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/adobe/default.svg",
    iconFallback: "/assets/icons/adobecreativecloud.svg",
  },
  {
    label: "Canva",
    href: "https://www.canva.com/?utm_source=1234567890.dev",
    iconSource: "/assets/icons/canva.svg",
  },
  {
    label: "DaVinci Resolve",
    icon: siDavinciresolve,
    href: "https://www.blackmagicdesign.com/products/davinciresolve?utm_source=1234567890.dev",
  },
];

const SHENZHEN_TIME_LABEL = "Shenzhen · UTC+8";

function getShenzhenTime(date = new Date()) {
  const hour = (date.getUTCHours() + 8) % 24;
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();
  const millisecond = date.getUTCMilliseconds();

  return { hour, minute, second, millisecond };
}

function getShenzhenGreeting({ hour, minute }) {
  const minuteOfDay = hour * 60 + minute;

  if (minuteOfDay >= 360 && minuteOfDay < 720) return "Good morning ☀️";
  if (minuteOfDay >= 720 && minuteOfDay < 1080) return "Good afternoon 🌤️";
  if (minuteOfDay >= 1080 && minuteOfDay < 1410) return "Good evening 🌙";
  return "Probably asleep 💤";
}

function randomizeQuoteOrder(length) {
  const indexes = Array.from({ length }, (_, index) => index);

  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }

  return indexes;
}

function BrandIcon({ icon, iconSource, iconFallback, label }) {
  if (iconSource) {
    return (
      <img
        className="stack-pill__icon"
        src={iconSource}
        alt=""
        onError={(event) => {
          if (!iconFallback || event.currentTarget.dataset.fallbackApplied) return;
          event.currentTarget.dataset.fallbackApplied = "true";
          event.currentTarget.src = iconFallback;
        }}
      />
    );
  }

  if (!icon) return null;

  return (
      <svg
        className="stack-pill__icon"
        role="img"
        aria-label={`${label || icon.title} icon`}
        viewBox="0 0 24 24"
    >
      <path d={icon.path} />
    </svg>
  );
}

function StackGroup({ title, items }) {
  return (
    <section className="stack-group" aria-labelledby={`stack-${title.toLowerCase()}`}>
      <h3 className="stack-group__title" id={`stack-${title.toLowerCase()}`}>
        {title}
      </h3>
      <ul className="stack-pills" role="list">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className="stack-pill"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} official website (opens in a new tab)`}
            >
              <BrandIcon
                icon={item.icon}
                iconSource={item.iconSource}
                iconFallback={item.iconFallback}
                label={item.label}
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function DevelopmentDisclaimer({ locale }) {
  const isChinese = locale === "zh";

  return (
    <aside className="stack-disclaimer" aria-labelledby="development-disclaimer-title">
      <h4 className="stack-disclaimer__title" id="development-disclaimer-title">
        {isChinese ? '"一点说明"' : '"A Disclaimer"'}
      </h4>
      <p className="stack-disclaimer__body">
        {isChinese
          ? "我确实用这些语言和框架做过实际项目，但我不是一个以语法 (syntax) 为中心的程序员。我更关注产品思维、架构、创意方向和设计。我是一个全栈 vibe coder，或者在 AI 时代的语境下，一个“architect”。"
          : "I’ve built real projects with these languages and frameworks, but I’m not a syntax-first programmer. I focus on product thinking, architecture, creative direction, and design. I’m a full-stack vibe coder or an “architect” in the context of the AI era."}
      </p>
      <blockquote className="stack-disclaimer__quote">
        <p>“English is the best programming language of the future.”</p>
        <footer>— Jensen Huang</footer>
      </blockquote>
    </aside>
  );
}

const CLOCK_FACE_SIZE = 400;
const CLOCK_CENTER = CLOCK_FACE_SIZE / 2;
const CLOCK_DIAL_PATH = [
  `M ${CLOCK_CENTER} 0`,
  "H 384 A 16 16 0 0 1 400 16",
  "V 384 A 16 16 0 0 1 384 400",
  "H 16 A 16 16 0 0 1 0 384",
  "V 16 A 16 16 0 0 1 16 0",
  "Z",
].join(" ");
const CLOCK_NUMERALS = [
  ["12", 200, 91.52],
  ["3", 314.08, 200],
  ["6", 200, 308.48],
  ["9", 85.92, 200],
];

function readShenzhenClock(date = new Date()) {
  const local = getShenzhenTime(date);
  const preciseSecond = local.second + local.millisecond / 1000;
  const secondsSinceMidnight = local.hour * 3600 + local.minute * 60 + preciseSecond;

  return {
    greeting: getShenzhenGreeting(local),
    secondPhase: secondsSinceMidnight % 60,
    minutePhase: secondsSinceMidnight % 3600,
    hourPhase: secondsSinceMidnight % 43200,
    secondAngle: preciseSecond * 6,
    minuteAngle: (local.minute + preciseSecond / 60) * 6,
    hourAngle: ((local.hour % 12) + local.minute / 60 + preciseSecond / 3600) * 30,
  };
}

function useShenzhenClock() {
  const [clock, setClock] = useState(() => readShenzhenClock());
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event) => setReducedMotion(event.matches);
    motionQuery.addEventListener("change", updatePreference);
    return () => motionQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    let timer = 0;

    const refresh = () => {
      const now = new Date();
      setClock(readShenzhenClock(now));

      const millisecondsUntilNextMinute =
        60_000 - (now.getUTCSeconds() * 1000 + now.getUTCMilliseconds()) + 16;
      timer = window.setTimeout(
        refresh,
        reducedMotion ? 1000 : millisecondsUntilNextMinute,
      );
    };

    refresh();
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  return clock;
}

function useDialMarks() {
  const guideRef = useRef(null);
  const [marks, setMarks] = useState([]);

  useLayoutEffect(() => {
    const guide = guideRef.current;
    if (!guide) return;

    const perimeter = guide.getTotalLength();
    const nextMarks = Array.from({ length: 60 }, (_, index) => {
      const point = guide.getPointAtLength((perimeter * index) / 60);
      const towardCenterX = CLOCK_CENTER - point.x;
      const towardCenterY = CLOCK_CENTER - point.y;
      const magnitude = Math.hypot(towardCenterX, towardCenterY) || 1;
      const unitX = towardCenterX / magnitude;
      const unitY = towardCenterY / magnitude;
      const major = index % 5 === 0;
      const outerInset = 12;
      const markLength = major ? 34 : 20;

      return {
        major,
        x1: point.x + unitX * outerInset,
        y1: point.y + unitY * outerInset,
        x2: point.x + unitX * (outerInset + markLength),
        y2: point.y + unitY * (outerInset + markLength),
      };
    });

    setMarks(nextMarks);
  }, []);

  return { guideRef, marks };
}

function DialMarks() {
  const { guideRef, marks } = useDialMarks();

  return (
    <g aria-hidden="true">
      <path ref={guideRef} d={CLOCK_DIAL_PATH} className="analog-clock__guide" />
      {marks.map((mark, index) => (
        <line
          key={index}
          x1={mark.x1}
          y1={mark.y1}
          x2={mark.x2}
          y2={mark.y2}
          strokeLinecap="round"
          strokeWidth={mark.major ? 1.7 : 1.1}
          vectorEffect="non-scaling-stroke"
          className={mark.major ? "analog-clock__tick--hour" : "analog-clock__tick"}
        />
      ))}
    </g>
  );
}

function rotorStyle(phase, angle) {
  return {
    "--clock-angle": `${angle}deg`,
    animationDelay: `${-phase}s`,
  };
}

function ClockNeedle({ kind, phase, angle, reach, thickness }) {
  const shoulderY = CLOCK_CENTER - 32;

  return (
    <g
      className={`analog-clock__rotor analog-clock__rotor--${kind}`}
      style={rotorStyle(phase, angle)}
    >
      <path
        d={`M ${CLOCK_CENTER} ${CLOCK_CENTER + 2} L ${CLOCK_CENTER} ${shoulderY}`}
        strokeWidth="2.8"
        strokeLinecap="round"
        className="analog-clock__hand"
      />
      <line
        x1={CLOCK_CENTER}
        y1={shoulderY - thickness / 2}
        x2={CLOCK_CENTER}
        y2={CLOCK_CENTER - reach}
        strokeWidth={thickness}
        strokeLinecap="round"
        className="analog-clock__hand"
      />
    </g>
  );
}

function VisitorTime() {
  const clock = useShenzhenClock();

  return (
    <section className="info-panel time-panel">
      <div
        className="time-panel__face"
        tabIndex="0"
        aria-label={`Analog clock showing ${SHENZHEN_TIME_LABEL}. ${clock.greeting}`}
      >
        <svg
          className="analog-clock"
          viewBox={`0 0 ${CLOCK_FACE_SIZE} ${CLOCK_FACE_SIZE}`}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-hidden="true"
        >
          <DialMarks />

          {CLOCK_NUMERALS.map(([label, x, y]) => (
            <text
              key={label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="56"
              fontWeight="600"
              letterSpacing="-0.02em"
              className="analog-clock__numeral"
            >
              {label}
            </text>
          ))}

          <ClockNeedle
            kind="hour"
            phase={clock.hourPhase}
            angle={clock.hourAngle}
            reach={100}
            thickness={19.2}
          />
          <ClockNeedle
            kind="minute"
            phase={clock.minutePhase}
            angle={clock.minuteAngle}
            reach={152}
            thickness={16}
          />
          <g
            className="analog-clock__rotor analog-clock__rotor--second"
            style={rotorStyle(clock.secondPhase, clock.secondAngle)}
          >
            <line
              x1="200"
              y1="240"
              x2="200"
              y2="32"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="analog-clock__second"
            />
          </g>
          <circle
            cx="200"
            cy="200"
            r="3.4"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="analog-clock__pin"
          />
        </svg>
      </div>
      <div className="time-panel__tooltip" role="tooltip">
        <span className="time-panel__tooltip-place">{SHENZHEN_TIME_LABEL}</span>
        <span className="time-panel__tooltip-greeting">{clock.greeting}</span>
      </div>
    </section>
  );
}

function QuotePanel() {
  const [quoteOrder] = useState(() => randomizeQuoteOrder(QUOTES.length));

  const cards = useMemo(() => {
    const order = quoteOrder;

    return [...order].reverse().map((quoteIndex) => {
      const quote = QUOTES[quoteIndex];
      return (
        <article className="info-panel quote-panel quote-stack__card" key={quoteIndex}>
          <blockquote className="quote-panel__quote">
            <p>“{quote.text}”</p>
            <footer>— {quote.author}</footer>
          </blockquote>

          <p className="quote-stack__hint" aria-hidden="true">
            Drag or click for the next quote
          </p>
        </article>
      );
    });
  }, [quoteOrder]);

  return (
    <section className="quote-stack" aria-label="Rotating quote stack">
      <div className="quote-stack__cards">
        <Stack
          cards={cards}
          autoplay
          autoplayDelay={5000}
          pauseOnHover
          sensitivity={170}
          sendToBackOnClick
        />
      </div>
      <p className="quote-stack__caption">some random quotes</p>
    </section>
  );
}

export function TechStackPanel({ className = "", locale = "en" }) {
  const panelClassName = ["info-panel", "stack-panel", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={panelClassName} aria-labelledby="tech-stack-title">
      <div className="stack-panel__heading">
        <h2 id="tech-stack-title">Tech Stack</h2>
      </div>
      <div className="stack-panel__groups">
        <StackGroup title="Development" items={DEVELOPMENT} />
        <StackGroup title="Tools" items={TOOLS} />
        <DevelopmentDisclaimer locale={locale} />
      </div>
    </section>
  );
}

export default function InfoDashboard({ locale = "en" }) {
  return (
    <div className="info-dashboard">
      <TechStackPanel locale={locale} />

      <div className="info-dashboard__aside">
        <VisitorTime />
        <QuotePanel />
      </div>
    </div>
  );
}
