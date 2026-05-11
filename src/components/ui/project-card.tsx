import { ArrowUpRight } from "lucide-react";
import type { CardProject } from "@/data/projects";

interface ProjectCardProps {
  project: CardProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="mx-auto grid max-w-5xl gap-6 rounded-3xl bg-white/12 p-5 shadow-project md:grid-cols-[1.1fr_0.9fr] md:p-7">
      <div className="space-y-4">
        <p className="inline-flex rounded-full bg-sky-400/15 px-3 py-1 text-xs font-medium text-sky-200">
          {project.badge}
        </p>
        <h3 className="text-xl font-semibold text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-200">
          {project.body}
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/15 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
        >
          {project.linkLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
        <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-cyan-300/10 to-transparent blur-xl" />
        <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950/75 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.6)]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-[420px] w-full rounded-[1.5rem] object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </article>
  );
}
