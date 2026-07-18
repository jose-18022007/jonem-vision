import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Cloud, Bot, Smartphone, Layers, type LucideIcon } from "lucide-react";

type Card = { title: string; desc: string; icon: LucideIcon; span: string; variant: "raised" | "inset" | "dark" };

const cards: Card[] = [
  { title: "Web Development", desc: "Modern, performant web platforms built with the best of React, Next, and edge infrastructure.", icon: Globe, span: "md:col-span-2 md:row-span-1", variant: "raised" },
  { title: "Cloud Solutions", desc: "Scalable cloud architectures designed for reliability, security, and cost efficiency.", icon: Cloud, span: "md:col-span-1 md:row-span-2", variant: "raised" },
  { title: "Automation", desc: "Custom workflows that eliminate repetitive tasks and unlock team velocity.", icon: Bot, span: "md:col-span-1", variant: "inset" },
  { title: "Mobile Applications", desc: "Native-quality mobile experiences across iOS and Android.", icon: Smartphone, span: "md:col-span-1", variant: "raised" },
  { title: "SaaS Products", desc: "End-to-end SaaS engineering — from architecture and billing to onboarding.", icon: Layers, span: "md:col-span-2", variant: "dark" },
];

export function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="services" ref={ref} className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <span className="font-label text-[0.75rem] uppercase text-[#111827]/50" style={{ letterSpacing: "0.25em" }}>What We Do</span>
          <h2 className="mt-4 font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            Solutions engineered<br />for your ambitions.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[220px]">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isDark = c.variant === "dark";
            const cls =
              c.variant === "dark"
                ? "text-[#e7e5e0]"
                : c.variant === "inset"
                ? "neu-inset"
                : "neu-raised";
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] p-8 md:p-10 ${c.span} ${cls}`}
                style={isDark ? { background: "#111827" } : undefined}
              >
                <div className="flex items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-full ${isDark ? "bg-white/10" : "neu-inset-sm"}`}>
                    <Icon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className={`font-label text-[1.2rem] ${isDark ? "text-[#e7e5e0]" : "text-[#111827]"}`} style={{ letterSpacing: "0.02em" }}>
                    {c.title}
                  </h3>
                  <p className={`mt-2 font-body text-[0.92rem] ${isDark ? "text-[#e7e5e0]/70" : "text-[#111827]/65"}`}>
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
