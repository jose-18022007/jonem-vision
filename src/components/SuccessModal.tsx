import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Clock, Mail, X } from "lucide-react";

export function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center px-4"
          style={{ background: "rgba(17,24,39,0.45)", backdropFilter: "blur(12px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[480px] rounded-[28px] px-8 py-12 text-center"
            style={{
              background: "#e7e5e0",
              boxShadow: "20px 20px 40px #d4d0c8, -20px -20px 40px #f5f3ef, 0 0 0 1px rgba(255,255,255,0.6)",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full neu-raised-sm"
            >
              <X size={16} />
            </button>

            <div className="relative mx-auto grid h-[88px] w-[88px] place-items-center rounded-full neu-raised">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CheckCircle size={36} />
              </motion.div>
              <svg className="absolute inset-0" viewBox="0 0 88 88">
                <motion.circle
                  cx="44"
                  cy="44"
                  r="43"
                  fill="none"
                  stroke="rgba(17,24,39,0.15)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
            </div>

            <h3 className="mt-6 font-display text-[2rem] text-[#111827]">Message Sent!</h3>
            <p className="mt-1 font-label text-[1rem] text-[#111827]/60">Thank you for reaching out.</p>
            <p className="mt-3 font-body text-[0.9rem] leading-[1.7] text-[#111827]/65">
              We've received your message and our team will get back to you within 24 hours. We're excited to learn about your project!
            </p>

            <div className="my-6 h-px" style={{ boxShadow: "0 1px 0 #d4d0c8, 0 -1px 0 #f5f3ef" }} />

            <div className="flex items-center justify-between gap-4 font-label text-[0.75rem] text-[#111827]/60">
              <span className="inline-flex items-center gap-2"><Clock size={14} /> Response within 24 hours</span>
              <span className="inline-flex items-center gap-2"><Mail size={14} /> Check your inbox</span>
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full rounded-full bg-[#111827] px-6 py-3.5 font-label text-sm uppercase tracking-widest text-[#e7e5e0] transition hover:scale-[1.01]"
            >
              Back to Exploring
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
