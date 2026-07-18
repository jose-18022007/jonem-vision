import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#111827]"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-[#e7e5e0]"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            JONEM
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
