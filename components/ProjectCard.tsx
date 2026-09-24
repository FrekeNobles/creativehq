import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../lib/projects";

export default function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <article className={`project-card group grid overflow-hidden rounded-2xl border border-[#e1dcda] bg-white transition-all duration-300 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="relative min-h-60 overflow-hidden bg-[#eee9e4] md:min-h-90">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.08em] backdrop-blur">{project.category}</div>
      </div>
      <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
        <div>
          <div className="mb-5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.13em] text-[#7a707c]">
            <span>{project.year}</span><span>Case study</span>
          </div>
          <h3 className="display text-2xl font-bold leading-[.98] sm:text-3xl">{project.title}</h3>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#68606d]">{project.description}</p>
        </div>
        <Link href={`/case-study/${project.slug}`} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-(--orange) px-4 py-2.5 text-[11px] font-bold text-white transition hover:gap-3">
          View case study <span className="grid h-5 w-5 place-items-center rounded-full bg-[#ffb497] text-(--orange)"><ArrowUpRight size={12} /></span>
        </Link>
      </div>
    </article>
  );
}
