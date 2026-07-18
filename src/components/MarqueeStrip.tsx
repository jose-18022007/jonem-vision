import { Diamond } from "lucide-react";

const items = [
  "Web Development", "Cloud Solutions", "Automation", "Mobile Apps",
  "UI/UX Design", "API Integration", "SaaS Products", "Digital Transformation",
];

export function MarqueeStrip() {
  const set = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((t) => (
        <div key={t} className="flex items-center gap-10">
          <span className="font-label text-[0.9rem] uppercase" style={{ letterSpacing: "0.12em" }}>{t}</span>
          <Diamond size={10} className="opacity-60" />
        </div>
      ))}
    </div>
  );
  return (
    <div className="flex h-14 items-center overflow-hidden bg-[#111827] text-[#e7e5e0]">
      <div className="flex marquee-track">
        {set}{set}
      </div>
    </div>
  );
}
