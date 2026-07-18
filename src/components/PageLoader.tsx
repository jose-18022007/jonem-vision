import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let maxTimeout: NodeJS.Timeout;
    let rafId: number;
    
    console.log('[PageLoader] Initial readyState:', document.readyState);
    
    const hideLoader = () => {
      console.log('[PageLoader] Hiding loader');
      setShow(false);
    };
    
    const handleLoad = () => {
      console.log('[PageLoader] Load event fired, readyState:', document.readyState);
      // Use requestAnimationFrame to ensure DOM is ready
      rafId = requestAnimationFrame(() => {
        // Wait for both window load and a minimum display time
        timeout = setTimeout(hideLoader, 1400);
      });
    };

    // Fallback: force hide after 5 seconds no matter what
    maxTimeout = setTimeout(() => {
      console.log('[PageLoader] Max timeout reached - forcing hide');
      hideLoader();
    }, 5000);

    // Check multiple ready states
    if (document.readyState === 'complete') {
      console.log('[PageLoader] Document already complete');
      handleLoad();
    } else if (document.readyState === 'interactive') {
      console.log('[PageLoader] Document interactive, waiting for load');
      // DOM is ready but resources might still be loading
      window.addEventListener('load', handleLoad);
    } else {
      console.log('[PageLoader] Document loading, waiting for events');
      // Document still parsing
      window.addEventListener('DOMContentLoaded', handleLoad);
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(maxTimeout);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#111827]"
          style={{ pointerEvents: 'none' }}
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
