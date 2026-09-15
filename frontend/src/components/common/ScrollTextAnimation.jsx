import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollTextAnimation({ leftText, rightText, label = "TECH BIT 2K26" }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
    0     → Section starts entering viewport
    0.25  → Text reaches center
    0.50  → Text stays around center
    0.75  → Text moves back outward
    1     → Text completely disappears
  */

  const leftX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.75, 1],
    ["-120%", "-20%", "0%", "-80%", "-150%"],
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.75, 1],
    ["120%", "20%", "0%", "80%", "150%"],
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.65, 0.85, 1],
    [0, 0.5, 1, 1, 0.35, 0],
  );

  const centerOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.65, 0.85, 1],
    [0, 0, 1, 1, 0.3, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.8, 0.95, 1, 0.95, 0.8],
  );

  return (
    <section ref={sectionRef} className="relative h-[180vh] overflow-hidden">
      {/* Sticky animation viewport */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* LEFT TEXT */}
        <motion.div
          style={{
            x: leftX,
            opacity: textOpacity,
            scale,
          }}
          className="
            pointer-events-none
            absolute
            left-0
            whitespace-nowrap
            text-[17vw]
            font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.045]
            select-none
            sm:text-[14vw]
          "
        >
          {leftText}
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          style={{
            x: rightX,
            opacity: textOpacity,
            scale,
          }}
          className="
            pointer-events-none
            absolute
            right-0
            whitespace-nowrap
            text-[17vw]
            font-black
            leading-none
            tracking-[-0.08em]
            text-blue-400/[0.07]
            select-none
            sm:text-[14vw]
          "
        >
          {rightText}
        </motion.div>

        {/* CENTER CONTENT */}
        <motion.div
          style={{
            opacity: centerOpacity,
          }}
          className="relative z-10 px-6 text-center"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.5em] text-white/25 sm:text-[10px]">
            {label}
          </p>

          <div className="mx-auto mt-4 h-px w-12 bg-white/15" />
        </motion.div>
      </div>
    </section>
  );
}

export default ScrollTextAnimation;
