"use client";

import { about, skills } from "@/content";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`animate-fade-in scroll-mt-20 px-6 py-20 ${isVisible ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold">
          <span className="text-accent">#</span> About Me
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-muted whitespace-pre-line">
          {about}
        </p>

        <h3 className="mb-6 font-mono text-sm text-accent">
          &gt; Skills & Technologies
        </h3>

        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-2 font-mono text-xs text-muted">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-surface px-3 py-1 font-mono text-sm transition-colors hover:border-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
