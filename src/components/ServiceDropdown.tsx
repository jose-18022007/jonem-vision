import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Cloud, Bot, Smartphone, Layers, Code2, HelpCircle, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const options: { label: string; icon: LucideIcon }[] = [
  { label: "Web Development", icon: Globe },
  { label: "Cloud Solutions", icon: Cloud },
  { label: "Automation", icon: Bot },
  { label: "Mobile Application", icon: Smartphone },
  { label: "SaaS Product", icon: Layers },
  { label: "Custom Software", icon: Code2 },
  { label: "Not Sure Yet", icon: HelpCircle },
];

export function ServiceDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-2xl px-5 py-4 neu-inset-sm text-left font-body text-[0.95rem] text-[#111827]"
      >
        <span className={value ? "" : "opacity-45"}>{value || "Select a service"}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 z-[100] mt-2 max-h-[280px] overflow-y-auto rounded-2xl p-2 jonem-scroll"
            style={{
              background: "#e7e5e0",
              boxShadow: "12px 12px 24px #d4d0c8, -12px -12px 24px #f5f3ef, 0 0 0 1px rgba(255,255,255,0.6)",
            }}
          >
            {options.map((opt, i) => {
              const I = opt.icon;
              const selected = opt.label === value;
              return (
                <div key={opt.label}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.label);
                      setOpen(false);
                    }}
                    className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-body text-[0.9rem] transition"
                    style={
                      selected
                        ? {
                            background: "#111827",
                            color: "#e7e5e0",
                            boxShadow: "inset 3px 3px 8px rgba(0,0,0,0.3)",
                          }
                        : undefined
                    }
                    onMouseEnter={(e) => {
                      if (!selected) (e.currentTarget as HTMLButtonElement).style.background = "rgba(17,24,39,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      if (!selected) (e.currentTarget as HTMLButtonElement).style.background = "";
                    }}
                  >
                    <I size={16} style={{ opacity: selected ? 1 : 0.6 }} />
                    <span>{opt.label}</span>
                  </button>
                  {i === 3 && <div className="mx-2 my-1 h-px" style={{ background: "rgba(17,24,39,0.08)" }} />}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
