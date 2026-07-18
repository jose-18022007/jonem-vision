import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Zap, Users, TrendingUp, Lock, Headphones, type LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; title: string; desc: string };
const features: Feature[] = [
  { icon: Shield, title: "Client-First Approach", desc: "Your goals set the pace. Every decision is measured against your outcomes." },
  { icon: Zap, title: "Rapid Delivery", desc: "Weekly momentum, shipped increments, and zero-surprise timelines." },
  { icon: Users, title: "Collaborative Process", desc: "Deep pairing with your team through design, build, and launch." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Architected for the day traffic multiplies — not just for launch day." },
  { icon: Lock, title: "Secure by Default", desc: "Modern security baked into every layer, from data to deployment." },
  { icon: Headphones, title: "Ongoing Support", desc: "We stay after launch: monitoring, tuning, and evolving with you." },
];

export function WhyUsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40" style={{ background: "#111827" }}>
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full" style={{ background: "rgba(231,229,224,0.05)", filter: "blur(120px)" }} />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full" style={{ background: "rgba(231,229,224,0.04)", filter: "blur(120px)" }} />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <span className="font-label text-[0.75rem] uppercase text-[#e7e5e0]/50" style={{ letterSpacing: "0.25em" }}>Why JONEM</span>
          <h2 className="mt-4 font-display text-[#e7e5e0]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            Why teams choose us.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-[20px] p-8 transition-all"
                style={{
                  background: "rgba(231,229,224,0.06)",
                  border: "1px solid rgba(231,229,224,0.12)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-full" style={{ background: "rgba(231,229,224,0.08)" }}>
                  <Icon size={20} className="text-[#e7e5e0]" />
                </div>
                <h3 className="mt-6 font-label text-[1.1rem] text-[#e7e5e0]">{f.title}</h3>
                <p className="mt-2 font-body text-[0.9rem] text-[#e7e5e0]/65">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
