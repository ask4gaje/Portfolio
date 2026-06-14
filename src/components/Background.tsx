export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orb 1 — top left, large cyan */}
      <div
        className="animate-drift-1 absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-[0.15]"
        style={{
          background: "radial-gradient(circle, #00d4ff, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orb 2 — bottom right, medium with purple tint */}
      <div
        className="animate-drift-2 absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Radial vignette — darker edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.04) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
