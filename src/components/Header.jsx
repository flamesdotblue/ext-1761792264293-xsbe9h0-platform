export default function Header() {
  return (
    <header className="flex flex-col items-start gap-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
        MindForge Brand
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Main Logo Design
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-white/70">
        A modern, professional mark featuring a stylized M/F symbol with the brand wordmark and tagline. Color palette emphasizes deep blue, bright orange, and gray, optimized for dark navy or transparent backgrounds.
      </p>
    </header>
  )
}
