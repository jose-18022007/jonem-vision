import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 90, damping: 16 }}
        className="fixed left-1/2 hidden md:flex"
        style={{
          top: 20,
          transform: "translateX(-50%)",
          zIndex: 100,
          alignItems: "center",
          flexWrap: "nowrap",
          gap: 4,
          padding: "7px 16px",
          borderRadius: 100,
          background: scrolled ? "rgba(231,229,224,0.85)" : "rgba(231,229,224,0.55)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow:
            "0 8px 32px rgba(17,24,39,0.08), 0 2px 8px rgba(17,24,39,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
          whiteSpace: "nowrap",
          width: "max-content",
          maxWidth: "calc(100vw - 48px)",
        }}
      >
        <a
          href="#top"
          className="font-display text-[#111827]"
          style={{ fontSize: "1rem", paddingRight: 12, marginRight: 4, whiteSpace: "nowrap" }}
        >
          JONEM
        </a>
        <span
          aria-hidden
          style={{ width: 1, height: 16, background: "rgba(17,24,39,0.15)", margin: "0 8px", flexShrink: 0 }}
        />
        <div className="flex items-center" style={{ gap: 2 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-label uppercase text-[#111827]/80 transition hover:bg-[#111827]/10 hover:text-[#111827]"
              style={{
                fontSize: "0.775rem",
                letterSpacing: "0.06em",
                padding: "6px 10px",
                borderRadius: 50,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="font-label inline-flex items-center gap-1.5 uppercase text-[#e7e5e0] transition hover:opacity-90"
          style={{
            fontSize: "0.75rem",
            padding: "7px 16px",
            borderRadius: 100,
            background: "#111827",
            marginLeft: 4,
            whiteSpace: "nowrap",
            flexShrink: 0,
            letterSpacing: "0.06em",
          }}
        >
          Let's Talk <ArrowUpRight size={13} />
        </a>
      </motion.nav>

      {/* Mobile */}
      <div
        className="fixed inset-x-4 top-4 flex items-center justify-between rounded-full px-5 py-3 glass-light md:hidden"
        style={{ zIndex: 100 }}
      >
        <span className="font-display text-xl">JONEM</span>
        <button onClick={() => setOpen(true)} aria-label="Menu">
          <Menu size={20} color="#111827" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed inset-0 z-[110] flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "rgba(231,229,224,0.97)", backdropFilter: "blur(20px)" }}
        >
          <button onClick={() => setOpen(false)} className="absolute right-6 top-6" aria-label="Close">
            <X size={26} />
          </button>
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.08 * i } }}
              className="font-label text-[1.5rem] uppercase text-[#111827]"
              style={{ letterSpacing: "0.1em" }}
            >
              {l.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
}
