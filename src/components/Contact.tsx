"use client";

import { personal } from "@/content";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`animate-fade-in scroll-mt-20 px-6 py-20 ${isVisible ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold">
          <span className="text-accent">#</span> Get In Touch
        </h2>

        <p className="mb-8 text-muted">
          Feel free to reach out. I&apos;m always open to new opportunities and collaborations.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={personal.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
