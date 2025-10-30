const swatches = [
  { name: 'Deep Blue', hex: '#0B3A75', desc: 'Primary brand hue' },
  { name: 'Dark Navy', hex: '#0B1220', desc: 'Background' },
  { name: 'Bright Orange', hex: '#FF7A1A', desc: 'Accent & energy' },
  { name: 'Gray', hex: '#98A2B3', desc: 'Secondary text' }
]

export default function Palette() {
  return (
    <aside className="sticky top-6 rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg backdrop-blur">
      <h3 className="pb-2 text-sm font-medium tracking-wide text-white/70">Brand Palette</h3>
      <ul className="space-y-3">
        {swatches.map((s) => (
          <li key={s.hex} className="flex items-center gap-3">
            <span
              className="h-9 w-9 shrink-0 rounded-md border border-white/15 shadow-inner"
              style={{ backgroundColor: s.hex }}
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">{s.name}</span>
              <span className="text-[11px] tracking-wide text-white/60">{s.hex} • {s.desc}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-md border border-white/10 bg-white/5 p-3 text-[11px] leading-relaxed text-white/70">
        The logo is optimized for dark navy and transparent backgrounds. For light backgrounds, ensure sufficient contrast by preserving the deep blue wordmark and orange accents.
      </div>
    </aside>
  )
}
