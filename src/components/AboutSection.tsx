import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Cloud, Zap } from "lucide-react";

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section id="about" ref={ref} className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[55%_45%]">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <div className="mb-6 flex items-center gap-4">
            <span className="block h-px w-10 bg-[#111827]/45" />
            <span className="font-label text-[0.75rem] uppercase text-[#111827]/45" style={{ letterSpacing: "0.25em" }}>About Us</span>
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Built by builders,<br />for builders.
          </h2>
          <div className="mt-8 space-y-5 font-body text-[1.05rem] leading-[1.8] text-[#111827]/75 max-w-[560px]">
            <p>JONEM is a forward-thinking software company founded by three passionate technologists. We don't just write code — we architect experiences, solve real business problems, and turn ambitious visions into market-ready digital products.</p>
            <p>From custom web platforms and intelligent automation to cloud infrastructure and scalable SaaS solutions, we approach every client engagement with the precision of engineers and the creativity of designers.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              [Code, "Full Stack"],
              [Cloud, "Cloud Native"],
              [Zap, "Automation First"],
            ].map(([Icon, label]) => {
              const I = Icon as React.ComponentType<{ size?: number }>;
              return (
                <div key={label as string} className="flex items-center gap-2.5 rounded-full px-5 py-2.5 neu-raised-sm">
                  <I size={15} />
                  <span className="font-label text-[0.8rem]">{label as string}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="relative aspect-square rounded-[32px] p-10 neu-raised">
            <div className="absolute right-8 top-8 h-40 w-40 rounded-full neu-inset" />
            <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full neu-raised-sm opacity-80" />
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="relative h-full w-full spin-slow">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#111827]/15" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-baseline gap-4 font-display text-[#111827]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
                <span>J</span>
                <span className="text-[#111827]/30">·</span>
                <span>B</span>
                <span className="text-[#111827]/30">·</span>
                <span>E</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
