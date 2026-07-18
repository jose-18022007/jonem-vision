import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, PenTool, Code2, Rocket, type LucideIcon } from "lucide-react";

type Step = { n: string; icon: LucideIcon; title: string; desc: string };
const steps: Step[] = [
  { n: "01", icon: Lightbulb, title: "Discover", desc: "We deep-dive into your vision, market, and technical requirements." },
  { n: "02", icon: PenTool, title: "Design", desc: "Architecting the solution structure and crafting the user experience." },
  { n: "03", icon: Code2, title: "Build", desc: "Agile development with continuous client visibility and feedback loops." },
  { n: "04", icon: Rocket, title: "Launch", desc: "Deployment, testing, optimization, and ongoing support." },
];

export function ProcessSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section ref={ref} className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-20 text-center">
          <span className="font-label text-[0.75rem] uppercase text-[#111827]/50" style={{ letterSpacing: "0.25em" }}>Our Process</span>
          <h2 className="mt-4 font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            From idea to impact.
          </h2>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[8%] right-[8%] top-[54px] hidden h-px border-t border-dashed border-[#111827]/25 md:block"
          />

          <div className="grid gap-14 md:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * i }}
                  className="relative flex flex-col items-center text-center"
                >
                  <span
                    className="absolute -top-2 font-display text-[#111827]/12"
                    style={{ fontSize: "3.5rem", opacity: 0.12 }}
                  >
                    {s.n}
                  </span>
                  <div className="relative z-10 grid h-[110px] w-[110px] place-items-center rounded-full neu-raised">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 font-label text-[1.15rem]">{s.title}</h3>
                  <p className="mt-2 max-w-[220px] font-body text-[0.9rem] text-[#111827]/60">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
