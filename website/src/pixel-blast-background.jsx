import { createRoot } from 'react-dom/client';
import PixelBlast from './components/PixelBlast/PixelBlast.jsx';

const host = document.getElementById('page-pixel-blast');

if (host) {
  const compact = window.matchMedia('(max-width: 767px)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  createRoot(host).render(
    <PixelBlast
      variant="square"
      pixelSize={compact ? 7 : 6}
      color="#18BFA8"
      patternScale={compact ? 3.5 : 3}
      patternDensity={compact ? 0.55 : 0.68}
      pixelSizeJitter={0.12}
      enableRipples={false}
      speed={reducedMotion ? 0 : 0.3}
      transparent
      edgeFade={0.32}
      autoPauseOffscreen
    />
  );
}
