import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, X, Phone, MessageSquare, Mail, ChevronUp } from "lucide-react";

const actions = [
  { icon: Phone, label: "Call us", href: "tel:+910000000000" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/910000000000" },
  { icon: Mail, label: "Email us", href: "mailto:hello@jonem.in" },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full neu-raised-sm"
          >
            <ChevronUp size={18} />
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
                    boxShadow: "4px 4px 10px #d4d0c8, -4px -4px 10px #f5f3ef",
                  }}
                >
                  {a.label}
                </span>
                <a
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={a.label}
                  className="grid h-12 w-12 place-items-center rounded-full transition hover:scale-110"
                  style={{ background: "#e7e5e0", boxShadow: "5px 5px 12px #d4d0c8, -5px -5px 12px #f5f3ef" }}
                >
                  <I size={18} />
                </a>
              </motion.div>
            );
          })}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="grid h-14 w-14 place-items-center rounded-full text-[#e7e5e0]"
        style={{
          background: "#111827",
          boxShadow: "8px 8px 20px rgba(17,24,39,0.25), -4px -4px 12px rgba(231,229,224,0.8)",
        }}
      >
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
