import { personal } from "@/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-sm text-muted">
          &copy; {new Date().getFullYear()} {personal.nickname}.
        </p>
      </div>
    </footer>
  );
}
