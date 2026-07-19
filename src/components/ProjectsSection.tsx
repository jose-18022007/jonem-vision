import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Star, ShoppingBag, Shield, GraduationCap, ArrowUpRight, type LucideIcon } from "lucide-react";

type Project = {
  n: string;
  name: string;
  category: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
};

const projects: Project[] = [
  { n: "01", name: "JKH Interior", category: "Web Development", desc: "A premium interior design showcase platform with immersive portfolio galleries and client inquiry management system.", icon: Home, tags: ["Web App", "Design", "Portfolio"] },
  { n: "02", name: "Astro Chakra", category: "Web Application", desc: "Spiritual wellness platform offering personalized astrology readings, chakra analysis, and appointment booking.", icon: Star, tags: ["Web App", "Booking System", "API"] },
  { n: "03", name: "Riaa Candles & Chocolate", category: "E-Commerce", desc: "Artisan e-commerce experience for handcrafted candles and chocolates with a rich visual brand identity and seamless checkout flow.", icon: ShoppingBag, tags: ["E-Commerce", "Branding", "UX"] },
  { n: "04", name: "Deeksha Insurance", category: "Business Platform", desc: "Comprehensive insurance management platform with policy tracking, claims processing, and client portal for seamless operations.", icon: Shield, tags: ["SaaS", "Dashboard", "Automation"] },
];

const featured: Project = {
  n: "05",
  name: "School ERP",
  category: "Enterprise Software",
  desc: "End-to-end school management system covering admissions, attendance, grades, fee management, and parent communication portal. This is our most complex enterprise delivery.",
  icon: GraduationCap,
  tags: ["ERP", "Enterprise", "Full Stack"],
};

function Card({ p, dark = false, className = "" }: { p: Project; dark?: boolean; className?: string }) {
  const Icon = p.icon;
  const ink = dark ? "#e7e5e0" : "#111827";
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative overflow-hidden rounded-[24px] p-9 ${className}`}
      style={
        dark
          ? { background: "#111827", color: "#e7e5e0" }
          : { background: "#e7e5e0", boxShadow: "10px 10px 20px #d4d0c8, -10px -10px 20px #f5f3ef" }
      }
    >
      {dark && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage: "radial-gradient(circle, #e7e5e0 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      )}
      <span
        className="pointer-events-none absolute right-6 top-4 font-display"
        style={{ fontSize: "5rem", opacity: dark ? 0.08 : 0.07, color: ink }}
      >
        {p.n}
      </span>

      <div
        className="grid h-12 w-12 place-items-center rounded-full"
        style={
          dark
            ? { background: "rgba(231,229,224,0.1)", border: "1px solid rgba(231,229,224,0.2)" }
            : { background: "#e7e5e0", boxShadow: "5px 5px 12px #d4d0c8, -5px -5px 12px #f5f3ef" }
        }
      >
        <Icon size={20} color={ink} />
      </div>

      <p className="mt-6 font-label text-[0.7rem] uppercase" style={{ letterSpacing: "0.2em", opacity: 0.5 }}>
        {p.category}
      </p>
      <h3 className="mt-2 font-display" style={{ fontSize: dark ? "2.25rem" : "1.6rem", color: ink }}>
        {p.name}
      </h3>
      <p className="mt-3 font-body text-[0.9rem] leading-[1.7]" style={{ opacity: 0.7 }}>
        {p.desc}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full px-3 py-1 font-label text-[0.7rem]"
            style={
              dark
                ? { background: "rgba(231,229,224,0.06)", border: "1px solid rgba(231,229,224,0.2)" }
                : { boxShadow: "inset 3px 3px 6px #d4d0c8, inset -3px -3px 6px #f5f3ef", background: "#e7e5e0" }
            }
          >
            {t}
          </span>
        ))}
      </div>

      <div
        className="mt-8 flex items-center justify-between border-t pt-5"
        style={{ borderColor: dark ? "rgba(231,229,224,0.12)" : "rgba(17,24,39,0.08)" }}
      >
        <a href="#" className="inline-flex items-center gap-2 font-body text-[0.875rem]">
          View Project
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <span className="font-label text-[0.7rem] uppercase" style={{ letterSpacing: "0.15em", opacity: 0.5 }}>
          2024
        </span>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="projects" ref={ref} className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-label text-[0.75rem] uppercase text-[#111827]/50" style={{ letterSpacing: "0.25em" }}>
            Our Work
          </span>
          <h2 className="mt-4 font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            Projects we're<br />proud of.
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] font-body text-[1rem] text-[#111827]/65">
            Real solutions built for real businesses.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-6 lg:grid-cols-5"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.n}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } },
              }}
              className={
                i === 0 ? "lg:col-span-3" :
                i === 1 ? "lg:col-span-2" :
                i === 2 ? "lg:col-span-2" :
                "lg:col-span-3"
              }
            >
              <Card p={p} />
            </motion.div>
          ))}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } },
            }}
            className="lg:col-span-5"
          >
            <Card p={featured} dark />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
