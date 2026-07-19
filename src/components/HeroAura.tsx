export function HeroAura() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Layer 1 */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-15%",
          left: "-10%",
          width: "min(70vw, 900px)",
          height: "min(70vw, 900px)",
          background:
            "radial-gradient(circle, rgba(17,24,39,0.07) 0%, rgba(17,24,39,0.03) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "auraFloat1 18s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      {/* Layer 2 */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "-20%",
          right: "-15%",
          width: "min(80vw, 1000px)",
          height: "min(80vw, 1000px)",
          background:
            "radial-gradient(circle, rgba(17,24,39,0.05) 0%, rgba(180,175,165,0.08) 35%, transparent 65%)",
          filter: "blur(100px)",
          animation: "auraFloat2 24s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
      {/* Layer 3 */}
      <div
        className="absolute rounded-full"
        style={{
          top: "50%",
          left: "50%",
          width: "min(50vw, 600px)",
          height: "min(50vw, 600px)",
          background:
            "radial-gradient(circle, rgba(17,24,39,0.04) 0%, rgba(212,208,200,0.06) 50%, transparent 70%)",
          filter: "blur(60px)",
          animation: "auraPulse 12s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      />
      {/* Layer 4 - noise */}
      <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.025 }} aria-hidden>
        <filter id="jonemNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#jonemNoise)" />
      </svg>
      {/* Layer 5 - light sweep */}
      <div
        className="absolute left-0 top-1/2"
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.4)",
          animation: "auraSweep 1.2s ease-out 1.5s forwards",
          width: 0,
          opacity: 0,
        }}
      />
    </div>
  );
}
