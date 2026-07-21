import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Cloud, Bot, Smartphone, Layers, type LucideIcon } from "lucide-react";

type Card = {
  title: string;
  desc: string;
  icon: LucideIcon;
  dark?: boolean;
  cls: string; // grid placement classes
};

const cards: Card[] = [
  { title: "Web Development", desc: "Modern, performant web platforms built with the best of React, Next, and edge infrastructure.", icon: Globe, cls: "lg:col-span-2" },
  { title: "Cloud Solutions", desc: "Scalable cloud architectures designed for reliability, security, and cost efficiency.", icon: Cloud, cls: "lg:col-span-1" },
  { title: "Automation", desc: "Custom workflows that eliminate repetitive tasks and unlock team velocity.", icon: Bot, cls: "lg:col-span-1" },
  { title: "Mobile Applications", desc: "Native-quality mobile experiences across iOS and Android.", icon: Smartphone, cls: "lg:col-span-1" },
  { title: "SaaS Products", desc: "End-to-end SaaS engineering — from architecture and billing to onboarding.", icon: Layers, dark: true, cls: "sm:col-span-2 lg:col-span-1" },
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3 lg:gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isDark = !!c.dark;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`service-card ${c.cls}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 28,
                  borderRadius: 24,
                  gap: 16,
                  minHeight: 200,
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                  background: isDark ? "#111827" : "#e7e5e0",
                  boxShadow: isDark
                    ? "0 12px 32px rgba(17,24,39,0.20)"
                    : "8px 8px 20px #d4d0c8, -8px -8px 20px #f5f3ef",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    minHeight: 48,
                    borderRadius: 14,
                    flexShrink: 0,
                    background: isDark ? "rgba(231,229,224,0.10)" : "#e7e5e0",
                    boxShadow: isDark ? "none" : "5px 5px 10px #d4d0c8, -5px -5px 10px #f5f3ef",
                    border: isDark ? "1px solid rgba(231,229,224,0.20)" : "none",
                  }}
                >
                  <Icon size={22} color={isDark ? "#e7e5e0" : "#111827"} style={{ flexShrink: 0 }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  <h3
                    className="font-label"
                    style={{
                      fontSize: "1.05rem",
                      color: isDark ? "#e7e5e0" : "#111827",
                      margin: 0,
                      lineHeight: 1.3,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "0.875rem",
                      color: isDark ? "rgba(231,229,224,0.60)" : "rgba(17,24,39,0.65)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
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
