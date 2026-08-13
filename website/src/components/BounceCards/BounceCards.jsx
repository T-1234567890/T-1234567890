import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

export default function BounceCards({
  className = "",
  cards = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = true,
}) {
  const containerRef = useRef(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const copyTimerRef = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bounce-card",
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  useEffect(() => () => window.clearTimeout(copyTimerRef.current), []);

  const getNoRotationTransform = (transform) => {
    if (/rotate\([\s\S]*?\)/.test(transform)) {
      return transform.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    }
    return transform === "none" ? "rotate(0deg)" : `${transform} rotate(0deg)`;
  };

  const getPushedTransform = (transform, offsetX) => {
    const match = transform.match(/translate\(([-0-9.]+)px\)/);
    if (!match) return transform === "none" ? `translate(${offsetX}px)` : `${transform} translate(${offsetX}px)`;
    return transform.replace(
      /translate\(([-0-9.]+)px\)/,
      `translate(${Number(match[1]) + offsetX}px)`,
    );
  };

  const pushSiblings = (hoveredIndex) => {
    if (!enableHover || !containerRef.current) return;
    const select = gsap.utils.selector(containerRef);
    const rowStart = Math.floor(hoveredIndex / 4) * 4;
    const rowEnd = rowStart + 4;

    cards.forEach((_, index) => {
      const target = select(`.bounce-card-${index}`);
      const baseTransform = transformStyles[index] || "none";
      const isSameRow = index >= rowStart && index < rowEnd;
      const transform = !isSameRow
        ? baseTransform
        : index === hoveredIndex
          ? getNoRotationTransform(baseTransform)
          : getPushedTransform(baseTransform, index < hoveredIndex ? -105 : 105);

      gsap.killTweensOf(target);
      gsap.to(target, {
        transform,
        duration: 0.4,
        ease: "back.out(1.4)",
        delay: !isSameRow || index === hoveredIndex ? 0 : Math.abs(hoveredIndex - index) * 0.05,
        overwrite: "auto",
      });
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const select = gsap.utils.selector(containerRef);

    cards.forEach((_, index) => {
      const target = select(`.bounce-card-${index}`);
      gsap.killTweensOf(target);
      gsap.to(target, {
        transform: transformStyles[index] || "none",
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      window.clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopiedIndex(null), 900);
    } catch {
      setCopiedIndex(null);
    }
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      ref={containerRef}
      role="list"
      aria-label="Social links"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {cards.map((card, index) => {
        const content = (
          <>
            <img
              className="bounce-card__icon"
              src={card.icon}
              alt=""
              onError={(event) => {
                if (card.fallback && event.currentTarget.src !== new URL(card.fallback, document.baseURI).href) {
                  event.currentTarget.src = card.fallback;
                }
              }}
            />
            <span className="bounce-card__label">{card.label}</span>
          </>
        );

        return (
          <div
            key={card.label}
            className={`bounce-card bounce-card-${index}`}
            style={{ transform: transformStyles[index] ?? "none", zIndex: index + 1 }}
            onMouseEnter={() => pushSiblings(index)}
            onMouseLeave={resetSiblings}
          >
            {card.href ? (
              <a
                className="bounce-card__action"
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label={card.label}
              >
                {content}
              </a>
            ) : (
              <button
                className="bounce-card__action"
                type="button"
                role="listitem"
                aria-label="Discord (copy ID)"
                onClick={() => copyToClipboard(card.copyText, index)}
              >
                {content}
              </button>
            )}
            {!card.href && (
              <span
                className={`bounce-card__copy-note${copiedIndex === index ? " is-visible" : ""}`}
                aria-live="polite"
                aria-atomic="true"
              >
                {copiedIndex === index ? "ID copied" : ""}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
