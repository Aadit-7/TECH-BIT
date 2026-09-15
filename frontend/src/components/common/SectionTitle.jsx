import { motion } from "framer-motion";

function SectionTitle({
  number,
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={
        isCenter
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        {number && (
          <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-400">
            {number}
          </span>
        )}

        <span className="h-px w-7 bg-blue-400/60" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/35 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;