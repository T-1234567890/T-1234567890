import { useEffect, useRef } from "react";
import "./ShapeGrid.css";

const ShapeGrid = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
  shape = "square",
  hoverTrailAmount = 0,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);
  const trailCells = useRef([]);
  const cellOpacities = useRef(new Map());

  useEffect(() => {
    const TRAIL_LIFETIME_MS = 450;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const isHex = shape === "hexagon";
    const isTri = shape === "triangle";
    const hexHoriz = squareSize * 1.5;
    const hexVert = squareSize * Math.sqrt(3);

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawHex = (cx, cy, size) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 3) * i;
        const vx = cx + size * Math.cos(angle);
        const vy = cy + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
    };

    const drawCircle = (cx, cy, size) => {
      ctx.beginPath();
      ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      ctx.closePath();
    };

    const drawTriangle = (cx, cy, size, flip) => {
      ctx.beginPath();
      if (flip) {
        ctx.moveTo(cx, cy + size / 2);
        ctx.lineTo(cx + size / 2, cy - size / 2);
        ctx.lineTo(cx - size / 2, cy - size / 2);
      } else {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy + size / 2);
      }
      ctx.closePath();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        const cols = Math.ceil(canvas.width / hexHoriz) + 3;
        const rows = Math.ceil(canvas.height / hexVert) + 3;

        for (let col = -2; col < cols; col += 1) {
          for (let row = -2; row < rows; row += 1) {
            const cx = col * hexHoriz + offsetX;
            const cy =
              row * hexVert +
              ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) +
              offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            if (alpha) {
              ctx.globalAlpha = alpha;
              drawHex(cx, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }

            drawHex(cx, cy, squareSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const colShift = Math.floor(gridOffset.current.x / halfW);
        const rowShift = Math.floor(gridOffset.current.y / squareSize);
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / halfW) + 4;
        const rows = Math.ceil(canvas.height / squareSize) + 4;

        for (let col = -2; col < cols; col += 1) {
          for (let row = -2; row < rows; row += 1) {
            const cx = col * halfW + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            if (alpha) {
              ctx.globalAlpha = alpha;
              drawTriangle(cx, cy, squareSize, flip);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }

            drawTriangle(cx, cy, squareSize, flip);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (shape === "circle") {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        for (let col = -2; col < cols; col += 1) {
          for (let row = -2; row < rows; row += 1) {
            const cx = col * squareSize + squareSize / 2 + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            if (alpha) {
              ctx.globalAlpha = alpha;
              drawCircle(cx, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }

            drawCircle(cx, cy, squareSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        for (let col = -2; col < cols; col += 1) {
          for (let row = -2; row < rows; row += 1) {
            const sx = col * squareSize + offsetX;
            const sy = row * squareSize + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            if (alpha) {
              ctx.globalAlpha = alpha;
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(sx, sy, squareSize, squareSize);
              ctx.globalAlpha = 1;
            }

            ctx.strokeStyle = borderColor;
            ctx.strokeRect(sx, sy, squareSize, squareSize);
          }
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2,
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateCellOpacities = (frameScale) => {
      const targets = new Map();
      const now = performance.now();

      trailCells.current = trailCells.current.filter(
        (cell) => now - cell.createdAt < TRAIL_LIFETIME_MS,
      );

      if (hoveredSquare.current) {
        targets.set(`${hoveredSquare.current.x},${hoveredSquare.current.y}`, 1);
      }

      if (hoverTrailAmount > 0) {
        for (let i = 0; i < trailCells.current.length; i += 1) {
          const trailCell = trailCells.current[i];
          const key = `${trailCell.x},${trailCell.y}`;
          if (!targets.has(key)) {
            const positionOpacity =
              (trailCells.current.length - i) / (trailCells.current.length + 1);
            const ageOpacity = Math.max(
              0,
              1 - (now - trailCell.createdAt) / TRAIL_LIFETIME_MS,
            );
            targets.set(
              key,
              positionOpacity * ageOpacity,
            );
          }
        }
      }

      for (const [key] of targets) {
        if (!cellOpacities.current.has(key)) cellOpacities.current.set(key, 0);
      }

      const opacityBlend = 1 - Math.pow(0.85, frameScale);
      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) || 0;
        const next = opacity + (target - opacity) * opacityBlend;
        if (next < 0.005) cellOpacities.current.delete(key);
        else cellOpacities.current.set(key, next);
      }
    };

    let previousFrameTime = null;

    const updateAnimation = (timestamp) => {
      const frameScale = previousFrameTime === null
        ? 1
        : Math.min((timestamp - previousFrameTime) / (1000 / 60), 2);
      previousFrameTime = timestamp;
      const effectiveSpeed = Math.max(speed, 0.1);
      const frameDistance = effectiveSpeed * frameScale;
      const wrapX = isHex ? hexHoriz * 2 : squareSize;
      const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - frameDistance + wrapX) % wrapX;
          break;
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + frameDistance + wrapX) % wrapX;
          break;
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + frameDistance + wrapY) % wrapY;
          break;
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - frameDistance + wrapY) % wrapY;
          break;
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - frameDistance + wrapX) % wrapX;
          gridOffset.current.y =
            (gridOffset.current.y - frameDistance + wrapY) % wrapY;
          break;
        default:
          break;
      }

      updateCellOpacities(frameScale);
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const addCurrentCellToTrail = () => {
      if (!hoveredSquare.current || hoverTrailAmount <= 0) return;
      trailCells.current.unshift({
        ...hoveredSquare.current,
        createdAt: performance.now(),
      });
      if (trailCells.current.length > hoverTrailAmount) {
        trailCells.current.length = hoverTrailAmount;
      }
    };

    const setHoveredSquare = (nextSquare) => {
      if (
        hoveredSquare.current?.x === nextSquare.x &&
        hoveredSquare.current?.y === nextSquare.y
      ) {
        return;
      }
      addCurrentCellToTrail();
      hoveredSquare.current = nextSquare;
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      if (
        event.pointerType === "touch" ||
        event.clientX < rect.left ||
        event.clientX >= rect.right ||
        event.clientY < rect.top ||
        event.clientY >= rect.bottom
      ) {
        clearHoverState();
        return;
      }

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.round(adjustedX / hexHoriz);
        const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
        const row = Math.round((adjustedY - rowOffset) / hexVert);
        setHoveredSquare({ x: col, y: row });
      } else if (isTri) {
        const halfW = squareSize / 2;
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        setHoveredSquare({
          x: Math.round(adjustedX / halfW),
          y: Math.floor(adjustedY / squareSize),
        });
      } else if (shape === "circle") {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        setHoveredSquare({
          x: Math.round(adjustedX / squareSize),
          y: Math.round(adjustedY / squareSize),
        });
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        setHoveredSquare({
          x: Math.floor(adjustedX / squareSize),
          y: Math.floor(adjustedY / squareSize),
        });
      }
    };

    const clearHoverState = () => {
      hoveredSquare.current = null;
      trailCells.current = [];
      cellOpacities.current.clear();
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) clearHoverState();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointercancel", clearHoverState);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", clearHoverState);
    document.addEventListener("scroll", clearHoverState, {
      capture: true,
      passive: true,
    });

    let isVisible = false;
    let isPageVisible = !document.hidden;

    const tryStart = () => {
      if (isVisible && isPageVisible && !requestRef.current) {
        previousFrameTime = null;
        requestRef.current = requestAnimationFrame(updateAnimation);
      }
    };

    const tryStop = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) tryStart();
        else tryStop();
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) {
        tryStart();
      } else {
        clearHoverState();
        tryStop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    tryStart();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      tryStop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointercancel", clearHoverState);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", clearHoverState);
      document.removeEventListener("scroll", clearHoverState, { capture: true });
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount]);

  return <canvas ref={canvasRef} className={`shapegrid-canvas ${className}`}></canvas>;
};

export default ShapeGrid;
