import { useRef, useEffect, useState, useMemo, useId } from "react";
import "./CurvedLoop.css";

const CurvedLoop = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
  accentText = "",
  accentHoverText = "",
  accentSuffix = "",
  accentHoverSuffix = "",
  accentSlotCharacters = 0,
  boundaryFill = "transparent",
  boundaryStroke = "transparent",
  repeatGap = 8,
  singlePhrase = false,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    const normalizedText = hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText;
    return `${normalizedText}${"\u00A0".repeat(Math.max(1, repeatGap))}`;
  }, [marqueeText, repeatGap]);

  const textParts = useMemo(() => {
    const accentIndex = accentText ? text.indexOf(accentText) : -1;
    if (accentIndex === -1) return null;
    return {
      before: text.slice(0, accentIndex),
      after: text.slice(accentIndex + accentText.length),
    };
  }, [accentText, text]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const pathLengthRef = useRef(1640);
  const [spacing, setSpacing] = useState(0);
  const [hoveredAccentIndex, setHoveredAccentIndex] = useState(null);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;
  const boundaryDepth = Math.max(360, 160 + Math.max(curveAmount, 0));

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const repeatCount = singlePhrase || !textLength
    ? 1
    : Math.ceil(1800 / textLength) + 2;
  const ready = spacing > 0;
  const accentSlotLength = accentSlotCharacters || Math.max(
    accentText.length + (accentSuffix ? 2 : 0),
    accentHoverText.length + (accentHoverSuffix ? 2 : 0),
  );
  const measuredAccentLength = accentText.length + (accentSuffix ? 2 : 0);
  const measurementText = textParts
    ? `${textParts.before}${accentText}${accentSuffix}${"\u00A0".repeat(
        Math.max(0, accentSlotLength - measuredAccentLength),
      )}${textParts.after}`
    : text;

  useEffect(() => {
    if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
  }, [measurementText, className]);

  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      if (pathRef.current) pathLengthRef.current = pathRef.current.getTotalLength();
      const initial = singlePhrase ? pathLengthRef.current : -spacing;
      textPathRef.current.setAttribute("startOffset", `${initial}px`);
    }
  }, [spacing, singlePhrase]);

  useEffect(() => {
    if (!spacing || !ready) return undefined;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const currentOffset = parseFloat(
          textPathRef.current.getAttribute("startOffset") || "0",
        );
        let newOffset = currentOffset + delta;

        if (singlePhrase) {
          if (newOffset <= -spacing) newOffset = pathLengthRef.current;
          if (newOffset > pathLengthRef.current) newOffset = -spacing;
        } else {
          const wrapPoint = spacing;
          if (newOffset <= -wrapPoint) newOffset += wrapPoint;
          if (newOffset > 0) newOffset -= wrapPoint;
        }

        textPathRef.current.setAttribute("startOffset", `${newOffset}px`);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready, singlePhrase]);

  const onPointerDown = (event) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = event.clientX;
    velRef.current = 0;
    event.target.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = event.clientX - lastXRef.current;
    lastXRef.current = event.clientX;
    velRef.current = dx;

    const currentOffset = parseFloat(
      textPathRef.current.getAttribute("startOffset") || "0",
    );
    let newOffset = currentOffset + dx;

    if (singlePhrase) {
      if (newOffset <= -spacing) newOffset = pathLengthRef.current;
      if (newOffset > pathLengthRef.current) newOffset = -spacing;
    } else {
      const wrapPoint = spacing;
      if (newOffset <= -wrapPoint) newOffset += wrapPoint;
      if (newOffset > 0) newOffset -= wrapPoint;
    }

    textPathRef.current.setAttribute("startOffset", `${newOffset}px`);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const renderWithSoftStars = (value, keyPrefix) => {
    const pieces = value.split("✦");
    const nodes = [];

    pieces.forEach((piece, index) => {
      nodes.push(piece);
      if (index < pieces.length - 1) {
        nodes.push(
          <tspan className="curved-loop-star" key={`${keyPrefix}-${index}`}>
            ✦
          </tspan>,
        );
      }
    });

    return nodes;
  };

  const renderLoopText = () => {
    if (!textParts) {
      return Array.from({ length: repeatCount }, (_, index) => (
        <tspan key={index}>{renderWithSoftStars(text, `loop-${index}`)}</tspan>
      ));
    }

    return Array.from({ length: repeatCount }, (_, index) => {
      const isHovered = hoveredAccentIndex === index && accentHoverText;
      const displayedAccent = isHovered ? accentHoverText : accentText;
      const displayedSuffix = isHovered ? accentHoverSuffix : accentSuffix;
      const displayedLength = displayedAccent.length + (displayedSuffix ? 2 : 0);

      return (
        <tspan key={index}>
          {renderWithSoftStars(textParts.before, `before-${index}`)}
          <tspan
            className="curved-loop-accent"
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") setHoveredAccentIndex(index);
            }}
            onPointerLeave={() => setHoveredAccentIndex(null)}
          >
            {displayedAccent}
            {displayedSuffix}
            <tspan className="curved-loop-accent-spacer">
              {"\u00A0".repeat(Math.max(0, accentSlotLength - displayedLength))}
            </tspan>
          </tspan>
          {renderWithSoftStars(textParts.after, `after-${index}`)}
        </tspan>
      );
    });
  };

  const cursorStyle = interactive ? (dragRef.current ? "grabbing" : "grab") : "auto";

  return (
    <div
      className="curved-loop-jacket"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 120">
        <path
          className="curved-loop-boundary-fill"
          d={`${pathD} L1540,${boundaryDepth} L-100,${boundaryDepth} Z`}
          fill={boundaryFill}
        />
        {boundaryStroke !== "transparent" && (
          <path
            className="curved-loop-boundary-line"
            d={pathD}
            fill="none"
            stroke={boundaryStroke}
          />
        )}
        <text
          ref={measureRef}
          xmlSpace="preserve"
          className={className}
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {measurementText}
        </text>
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {ready && (
          <text fontWeight="bold" xmlSpace="preserve" className={className}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              xmlSpace="preserve"
            >
              {renderLoopText()}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
