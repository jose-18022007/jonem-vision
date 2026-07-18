import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const label = "font-label text-[0.75rem] uppercase text-[#111827]/60";
  const input = "w-full rounded-2xl bg-transparent px-5 py-4 font-body text-[0.95rem] text-[#111827] placeholder:text-[#111827]/40 focus:outline-none neu-inset-sm";

  return (
    <section id="contact" ref={ref} className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="font-label text-[0.75rem] uppercase text-[#111827]/50" style={{ letterSpacing: "0.25em" }}>Contact</span>
          <h2 className="mt-4 font-display" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", lineHeight: 1.02 }}>
            Let's build<br />something<br />remarkable.
          </h2>
          <p className="mt-6 max-w-[420px] font-body text-[1.05rem] text-[#111827]/70">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <div className="mt-10 space-y-3">
            {[
              [Mail, "hello@jonem.dev"],
              [MapPin, "Remote · Worldwide"],
              [Clock, "Response within 24 hours"],
            ].map(([Icon, text]) => {
              const I = Icon as React.ComponentType<{ size?: number }>;
              return (
                <div key={text as string} className="inline-flex w-fit items-center gap-3 rounded-full px-5 py-3 neu-raised-sm mr-3">
                  <I size={15} />
                  <span className="font-body text-[0.92rem]">{text as string}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[28px] p-8 md:p-10 neu-raised"
        >
          <div className="space-y-6">
            <div>
              <label className={label} style={{ letterSpacing: "0.1em" }}>Name</label>
              <input required className={`${input} mt-2`} placeholder="Your full name" />
            </div>
            <div>
              <label className={label} style={{ letterSpacing: "0.1em" }}>Email</label>
              <input required type="email" className={`${input} mt-2`} placeholder="you@company.com" />
            </div>
            <div>
              <label className={label} style={{ letterSpacing: "0.1em" }}>Service Needed</label>
              <select className={`${input} mt-2 appearance-none`}>
                <option>Web Development</option>
                <option>Cloud Solutions</option>
                <option>Automation</option>
                <option>Mobile App</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className={label} style={{ letterSpacing: "0.1em" }}>Message</label>
              <textarea required rows={4} className={`${input} mt-2 resize-none`} placeholder="Tell us what you're building..." />
            </div>
            <button
              type="submit"
              disabled={loading || sent}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#111827] px-6 py-4 font-label text-sm uppercase tracking-widest text-[#e7e5e0] transition hover:opacity-95"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Sending</> : sent ? "Message Sent" : <>Send Message <Send size={16} /></>}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
