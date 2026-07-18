import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Github } from "lucide-react";

const founders = [
  { initial: "J", name: "Jose", role: "Co-Founder & Full Stack Developer", bio: "Turns intricate systems into elegant, maintainable code.", from: -60 },
  { initial: "B", name: "Bhaarathi Nesan", role: "Co-Founder & Solutions Architect", bio: "Designs the blueprints that let complex products scale.", from: 60, featured: true },
  { initial: "E", name: "Emmanuel Joshua", role: "Co-Founder & Creative Technologist", bio: "Bridges design intuition and engineering precision.", from: 60 },
];

export function TeamSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section id="team" ref={ref} className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-20 text-center">
          <span className="font-label text-[0.75rem] uppercase text-[#111827]/50" style={{ letterSpacing: "0.25em" }}>The Team</span>
          <h2 className="mt-4 font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            Meet the minds<br />behind JONEM.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:items-end">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: f.featured ? 60 : 0, x: f.featured ? 0 : f.from }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className={`rounded-[28px] p-10 text-center neu-raised ${f.featured ? "md:-translate-y-6 md:scale-[1.04]" : ""}`}
            >
              <div className="mx-auto grid h-[120px] w-[120px] place-items-center rounded-full neu-inset">
                <span className="font-display text-[3rem]">{f.initial}</span>
              </div>
              <h3 className="mt-8 font-label text-[1.3rem]" style={{ letterSpacing: "0.02em" }}>{f.name}</h3>
              <p className="mt-1.5 font-body text-[0.85rem] text-[#111827]/55">{f.role}</p>
              <p className="mt-4 font-body text-[0.95rem] text-[#111827]/75">{f.bio}</p>
              <div className="mt-6 flex justify-center gap-3">
                {[Linkedin, Github].map((Icon, k) => (
                  <button key={k} className="grid h-10 w-10 place-items-center rounded-full neu-raised-sm transition hover:scale-105" aria-label="social">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
