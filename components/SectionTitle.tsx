export default function SectionTitle({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <div className={light ? "text-white" : "text-(--ink)"}>
      {eyebrow && <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] opacity-60">{eyebrow}</p>}
      <h2 className="display max-w-165 text-3xl font-bold leading-[.96] sm:text-4xl md:text-[52px]">{title}</h2>
    </div>
  );
}
