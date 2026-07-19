import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Github } from "lucide-react";
import { FounderAvatar } from "./FounderAvatar";

const founders = [
  {
    initial: "J",
    name: "Jose",
    role: "Co-Founder & Full Stack Developer",
    bio: "Turns intricate systems into elegant, maintainable code.",
    // TODO: Replace with actual LinkedIn URL
    linkedin: "#",
    // TODO: Replace with actual GitHub URL
    github: "#",
    from: -60,
  },
  {
    initial: "B",
    name: "Bhaarathi Nesan",
    role: "Co-Founder & Solutions Architect",
    bio: "Designs the blueprints that let complex products scale.",
    // TODO: Replace with actual LinkedIn URL
    linkedin: "#",
    // TODO: Replace with actual GitHub URL
    github: "#",
    from: 60,
    featured: true,
  },
  {
    initial: "E",
    name: "Emmanuel Joshua",
    role: "Co-Founder & Creative Technologist",
    bio: "Bridges design intuition and engineering precision.",
    // TODO: Replace with actual LinkedIn URL
    linkedin: "#",
    // TODO: Replace with actual GitHub URL
    github: "#",
    from: 60,
  },
];

export function TeamSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section id="team" ref={ref} className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <span className="font-label text-[0.75rem] uppercase text-[#111827]/50" style={{ letterSpacing: "0.25em" }}>The Team</span>
          <h2 className="mt-4 font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            Meet the minds<br />behind JONEM.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-end">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: f.featured ? 60 : 0, x: f.featured ? 0 : f.from }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className={`rounded-[28px] p-10 text-center neu-raised ${
                f.featured ? "lg:-translate-y-6 lg:scale-[1.04] sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <FounderAvatar name={f.name} initial={f.initial} />
              <h3 className="mt-6 font-label text-[1.2rem]" style={{ letterSpacing: "0.04em" }}>{f.name}</h3>
              <p className="mt-1 font-body text-[0.875rem] text-[#111827]/55">{f.role}</p>
              <p className="mt-4 font-body text-[0.95rem] text-[#111827]/75">{f.bio}</p>
              <div className="my-6 h-px" style={{ boxShadow: "0 1px 0 #d4d0c8, 0 -1px 0 #f5f3ef" }} />
              <div className="flex justify-center gap-3">
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} LinkedIn Profile`}
                  className="grid h-9 w-9 place-items-center rounded-full neu-raised-sm transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/40"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={f.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} GitHub Profile`}
                  className="grid h-9 w-9 place-items-center rounded-full neu-raised-sm transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/40"
                >
                  <Github size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
