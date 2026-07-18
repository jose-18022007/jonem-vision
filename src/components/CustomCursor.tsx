import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"default" | "hover" | "text">("default");

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`;
      }
    };

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - 18}px, ${ring.y - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      if (t.closest("a, button, [role='button'], input[type='submit'], .cursor-hover")) {
        setVariant("hover");
      } else if (t.closest("input, textarea, [contenteditable='true']")) {
        setVariant("text");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isHover = variant === "hover";
  const isText = variant === "text";

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: 8, height: 8, borderRadius: 999,
          background: "#111827",
          opacity: isHover ? 0 : 1,
          transition: "opacity 200ms",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: isText ? 24 : isHover ? 56 : 36,
          height: isText ? 2 : isHover ? 56 : 36,
          borderRadius: isText ? 2 : 999,
          border: isText ? "none" : `1.5px solid rgba(17,24,39,${isHover ? 0.6 : 0.4})`,
          background: isText ? "#111827" : isHover ? "rgba(17,24,39,0.08)" : "transparent",
          transition: "width 250ms cubic-bezier(0.2,0.9,0.2,1), height 250ms cubic-bezier(0.2,0.9,0.2,1), background 250ms, border-radius 250ms",
        }}
      />
    </>
  );
}
