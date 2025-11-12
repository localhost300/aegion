import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center" ? "text-center mx-auto max-w-3xl" : "text-left";
  const isDark = theme === "dark";
  const titleClasses = isDark ? "text-white" : "text-brand-blue";
  const descriptionClasses = isDark ? "text-white/80" : "text-brand-slate";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`space-y-4 ${alignmentClasses}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold md:text-4xl ${titleClasses}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg ${descriptionClasses}`}>{description}</p>
      )}
    </motion.div>
  );
}
