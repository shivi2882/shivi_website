import { useEffect, useRef } from "react";

const COLORS = [
  { r: 56, g: 189, b: 248 }, // sky #38bdf8
  { r: 129, g: 140, b: 248 }, // violet #818cf8
  { r: 251, g: 113, b: 133 }, // rose #fb7185
];

const MIN_BEAMS = 22;

function createBeam(logicalW, logicalH) {
  const colorIndex = Math.floor(Math.random() * COLORS.length);
  const angle = -36 + Math.random() * 12;
  return {
    x: Math.random() * logicalW * 1.4 - logicalW * 0.2,
    y: Math.random() * logicalH * 1.4 - logicalH * 0.2,
    width: 28 + Math.random() * 72,
    length: logicalH * 2.4,
    angle,
    speed: 0.28 + Math.random() * 0.55,
    opacity: 0.3 + Math.random() * 0.4,
    colorIndex,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.012 + Math.random() * 0.022,
  };
}

function resetBeam(beam, index, _totalBeams, logicalW, logicalH) {
  const column = index % 3;
  const spacing = logicalW / 3;
  beam.y = logicalH + 120;
  beam.x =
    column * spacing +
    spacing / 2 +
    (Math.random() - 0.5) * spacing * 0.55;
  beam.width = 36 + Math.random() * 80;
  beam.speed = 0.25 + Math.random() * 0.5;
  beam.colorIndex = index % COLORS.length;
  beam.opacity = 0.3 + Math.random() * 0.4;
  beam.angle = -36 + Math.random() * 12;
  beam.length = logicalH * (2.1 + Math.random() * 0.5);
  beam.pulse = Math.random() * Math.PI * 2;
  return beam;
}

function drawBeam(ctx, beam) {
  const { r, g, b } = COLORS[beam.colorIndex];
  const pulseFactor = 0.82 + Math.sin(beam.pulse) * 0.18;
  const baseAlpha = beam.opacity * pulseFactor;
  const clamped = Math.min(0.7, Math.max(0.3, baseAlpha));

  ctx.save();
  ctx.translate(beam.x, beam.y);
  ctx.rotate((beam.angle * Math.PI) / 180);

  const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
  gradient.addColorStop(0, `rgba(${r},${g},${b},0)`);
  gradient.addColorStop(0.12, `rgba(${r},${g},${b},${clamped * 0.45})`);
  gradient.addColorStop(0.38, `rgba(${r},${g},${b},${clamped})`);
  gradient.addColorStop(0.62, `rgba(${r},${g},${b},${clamped * 0.95})`);
  gradient.addColorStop(0.88, `rgba(${r},${g},${b},${clamped * 0.4})`);
  gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);

  ctx.fillStyle = gradient;
  ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
  ctx.restore();
}

export function BeamsBackground() {
  const canvasRef = useRef(null);
  const beamsRef = useRef([]);
  const frameRef = useRef(0);
  const logicalSizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      logicalSizeRef.current = { w, h };

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor(MIN_BEAMS * 1.35);
      beamsRef.current = Array.from({ length: count }, (_, i) => {
        const beam = createBeam(w, h);
        return resetBeam(beam, i, count, w, h);
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const { w, h } = logicalSizeRef.current;
      if (!w || !h) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.filter = "blur(42px)";

      const total = beamsRef.current.length;
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        beam.x += Math.sin(beam.pulse * 0.35) * 0.15;

        if (beam.y + beam.length < -160) {
          resetBeam(beam, index, total, w, h);
        }
        drawBeam(ctx, beam);
      });

      ctx.filter = "none";
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "#000000",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
