import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 pt-20 pb-10 md:px-12" style={{ background: "#111827", color: "#e7e5e0" }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="font-display text-[2rem]">JONEM</div>
            <p className="mt-3 max-w-[240px] font-body text-[0.9rem] text-[#e7e5e0]/50">
              Software & IT solutions engineered with precision.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <button key={i} aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {[
            { title: "Navigation", items: [["About", "#about"], ["Services", "#services"], ["Team", "#team"], ["Contact", "#contact"]] },
            { title: "Services", items: [["Web Dev", "#services"], ["Cloud", "#services"], ["Automation", "#services"], ["Mobile", "#services"], ["SaaS", "#services"]] },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-label text-[0.75rem] uppercase text-[#e7e5e0]/60" style={{ letterSpacing: "0.2em" }}>{col.title}</div>
              <ul className="mt-4 space-y-2.5">
                {col.items.map(([l, h]) => (
                  <li key={l}><a href={h} className="font-body text-[0.95rem] text-[#e7e5e0]/70 transition hover:text-[#e7e5e0]">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="font-label text-[0.75rem] uppercase text-[#e7e5e0]/60" style={{ letterSpacing: "0.2em" }}>Get in Touch</div>
            <p className="mt-4 font-body text-[0.95rem] text-[#e7e5e0]/75">hello@jonem.dev</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-label text-[0.75rem] uppercase tracking-widest transition hover:bg-white/5">
              Start a Project <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 font-body text-[0.8rem] text-[#e7e5e0]/40">
          <p>© 2024 JONEM. All rights reserved.</p>
          <p>Crafted with precision by Jose, Bhaarathi Nesan & Emmanuel Joshua.</p>
        </div>
      </div>
    </footer>
  );
}
