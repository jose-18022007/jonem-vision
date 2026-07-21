import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, X, Phone, MessageSquare, Mail, ChevronUp } from "lucide-react";

const actions = [
  { icon: Phone, label: "Call us", href: "tel:+910000000000" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/910000000000" },
  { icon: Mail, label: "Email us", href: "mailto:hello@jonem.in" },
];

const cleanShadow = "0 4px 12px rgba(17,24,39,0.14), 0 1px 4px rgba(17,24,39,0.08)";
const cleanShadowHover = "0 6px 18px rgba(17,24,39,0.18), 0 2px 6px rgba(17,24,39,0.10)";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-floating-contact]")) setOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  return (
    <div
      data-floating-contact
      className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3"
    >
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full transition-all duration-200"
            style={{
              background: "#e7e5e0",
              boxShadow: cleanShadow,
              border: "1px solid rgba(17,24,39,0.10)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(17,24,39,0.18)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = cleanShadow;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ChevronUp size={18} color="#111827" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open &&
          actions.map((a, i) => {
            const I = a.icon;
            return (
              <motion.div
                key={a.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 } }}
                exit={{ y: 20, opacity: 0, transition: { delay: (actions.length - 1 - i) * 0.04 } }}
                className="flex items-center gap-3"
              >
                <span
                  className="rounded-full px-3.5 py-1.5 font-label text-[0.72rem] text-[#111827]"
                  style={{
                    letterSpacing: "0.08em",
                    background: "#e7e5e0",
                    boxShadow: "0 2px 8px rgba(17,24,39,0.10)",
                    border: "1px solid rgba(17,24,39,0.08)",
                  }}
                >
                  {a.label}
                </span>
                <a
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={a.label}
                  className="grid h-12 w-12 place-items-center rounded-full transition-all duration-200"
                  style={{
                    background: "#e7e5e0",
                    boxShadow: cleanShadow,
                    border: "1px solid rgba(17,24,39,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = cleanShadowHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = cleanShadow;
                  }}
                >
                  <I size={18} color="#111827" />
                </a>
              </motion.div>
            );
          })}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="grid h-14 w-14 place-items-center rounded-full text-[#e7e5e0] transition-all"
        style={{
          background: "#111827",
          boxShadow: "0 4px 16px rgba(17,24,39,0.20), 0 2px 6px rgba(17,24,39,0.12)",
          transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
          transitionDuration: "0.25s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(17,24,39,0.28), 0 4px 10px rgba(17,24,39,0.16)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(17,24,39,0.20), 0 2px 6px rgba(17,24,39,0.12)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.div>
      </button>
    </div>
  );
}
