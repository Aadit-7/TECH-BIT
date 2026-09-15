import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-blue-400" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-blue-400">
            TECH BIT 2K26
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="max-w-5xl text-[17vw] font-black leading-[0.78] tracking-[-0.08em] text-white sm:text-[12vw] md:text-[10vw]"
        >
          TECH
          <br />
          <span className="text-white/[0.18]">BIT</span>
        </motion.h1>

        {/* Bottom content */}
        <div className="mt-12 flex flex-col gap-8 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="max-w-md"
          >
            <p className="text-sm leading-7 text-white/45 sm:text-base">
              A platform to compete, innovate, and showcase your technical
              skills. Choose your events and register for TECH BIT 2K26.
            </p>

            <a
              href="#register"
              className="group mt-7 inline-flex items-center gap-3 bg-[#3E3E3E] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#113BC5]/90"
            >
              Register Now
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Event info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="flex gap-8 border-l border-white/10 pl-5 sm:gap-12"
          >
            <div>
              <p className="text-2xl font-bold text-white">08</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25">
                Events
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">2K26</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25">
                Edition
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">∞</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25">
                Possibilities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#rules"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/20 transition hover:text-white/50"
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">Scroll</span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
