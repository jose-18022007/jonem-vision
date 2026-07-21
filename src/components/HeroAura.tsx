import { useEffect, useState } from "react";

export function HeroAura() {
  const [sweep, setSweep] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSweep(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Layer 1 — warm gold, top-left */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-20%",
          left: "-15%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle at center, rgba(251,191,36,0.18) 0%, rgba(245,158,11,0.10) 30%, rgba(251,191,36,0.04) 60%, transparent 75%)",
          filter: "blur(70px)",
          animation: "auraOrb1 20s ease-in-out infinite alternate",
          transform: "translate3d(0,0,0)",
        }}
      />
      {/* Layer 2 — cool indigo, bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "-25%",
          right: "-20%",
          width: 850,
          height: 850,
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.08) 35%, rgba(99,102,241,0.03) 60%, transparent 75%)",
          filter: "blur(90px)",
          animation: "auraOrb2 26s ease-in-out infinite alternate-reverse",
          transform: "translate3d(0,0,0)",
        }}
      />
      {/* Layer 3 — rose accent, top-right */}
      <div
        className="absolute rounded-full"
        style={{
          top: "10%",
          right: "5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle at center, rgba(244,114,182,0.12) 0%, rgba(236,72,153,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
          animation: "auraOrb3 16s ease-in-out infinite alternate",
          transform: "translate3d(0,0,0)",
        }}
      />
      {/* Layer 4 — deep center ambient */}
      <div
        className="absolute"
        style={{
          top: "40%",
          left: "50%",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(17,24,39,0.06) 0%, rgba(100,116,139,0.04) 50%, transparent 70%)",
          filter: "blur(50px)",
          animation: "auraPulse 12s ease-in-out infinite",
          transform: "translate3d(-50%,-50%,0)",
        }}
      />
      {/* Layer 5 — one-time light sweep */}
      {sweep && (
        <div
          className="absolute"
          style={{
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
            animation: "lightSweep 1.4s ease-in-out forwards",
          }}
        />
      )}
    </div>
  );
}
