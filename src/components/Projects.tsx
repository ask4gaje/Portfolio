"use client";

import { projects } from "@/content";
import { useInView } from "@/hooks/useInView";

export default function Projects() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className={`animate-fade-in scroll-mt-20 px-6 py-20 ${isVisible ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold">
          <span className="text-accent">#</span> Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <h3 className="mb-2 text-xl font-semibold group-hover:text-accent">
                {project.name}
              </h3>

              <p className="mb-4 text-sm text-muted">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-accent-dim px-2 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-muted transition-colors hover:text-accent"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-muted transition-colors hover:text-accent"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
