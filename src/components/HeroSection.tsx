import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { HeroAura } from "./HeroAura";

const letters = "JONEM".split("");

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ background: "#e7e5e0", minHeight: "100vh", paddingTop: 140, paddingBottom: 80 }}
    >
      <HeroAura />

      {/* Left floating badge - only >=1280px */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-1/2 hidden -translate-y-1/2 xl:block"
        style={{ left: "4%", zIndex: 5 }}
      >
        <div className="glass-light flex items-center gap-2 rounded-full px-4 py-2">
          <Star size={14} />
          <span className="font-label text-[0.7rem] uppercase" style={{ letterSpacing: "0.2em" }}>Est. 2024</span>
        </div>
      </motion.div>

      {/* Right floating card - only >=1280px */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-1/2 hidden w-[220px] -translate-y-1/2 rounded-3xl p-6 float-slow neu-raised xl:block"
        style={{ right: "4%", zIndex: 5 }}
      >
        <p className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-[#111827]/50">Snapshot</p>
        <div className="mt-4 space-y-3">
          {[["3", "Founders"], ["10+", "Projects"], ["5", "Solutions"]].map(([n, l]) => (
            <div key={l} className="flex items-baseline justify-between">
              <span className="font-display text-3xl">{n}</span>
              <span className="font-label text-xs uppercase tracking-widest text-[#111827]/60">{l}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 flex w-full max-w-[680px] flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="rounded-full px-5 py-2 neu-inset-sm"
        >
          <span className="font-label text-[0.7rem] uppercase" style={{ letterSpacing: "0.2em" }}>Software & IT Solutions</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 1.7 } } }}
          className="mt-5 font-display text-hero-3d text-[#111827]"
          style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
        >
          {letters.map((c, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } }}
              style={{ display: "inline-block" }}
            >
              {c}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          className="mt-6 max-w-[520px] font-body text-[1.05rem] leading-[1.75] text-[#111827]/65"
        >
          We transform bold ideas into powerful digital realities — engineered with precision, designed with intent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#111827] px-8 py-4 font-label text-sm uppercase tracking-widest text-[#e7e5e0] transition hover:translate-y-[1px]"
            style={{ boxShadow: "6px 6px 14px #d4d0c8, -6px -6px 14px #f5f3ef" }}
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-[#111827]/20 px-8 py-4 font-label text-sm uppercase tracking-widest text-[#111827] transition hover:bg-[#111827]/5"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ zIndex: 5 }}
      >
        <span className="font-body text-[0.7rem] uppercase" style={{ letterSpacing: "0.2em" }}>Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
