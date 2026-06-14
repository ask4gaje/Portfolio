import { personal } from "@/content";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 font-mono text-accent">&gt; Hello, world, I'm</p>

        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          <span className="text-accent">{personal.name}</span>
        </h1>

        <p className="mb-8 text-lg text-muted md:text-xl">
          {personal.title}
        </p>

        <p className="mb-8 max-w-xl text-muted">{personal.tagline}</p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
