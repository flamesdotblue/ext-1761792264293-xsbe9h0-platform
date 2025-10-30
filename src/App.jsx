import { useState, useRef } from 'react'
import Header from './components/Header'
import Logo from './components/Logo'
import Controls from './components/Controls'
import Palette from './components/Palette'

export default function App() {
  const [bg, setBg] = useState('navy') // 'navy' | 'transparent'
  const svgRef = useRef(null)

  return (
    <div className="min-h-screen w-full bg-[#0A1020] text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Header />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="order-2 md:order-1 md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between gap-4 pb-3">
                <h2 className="text-sm font-medium tracking-wide text-white/70">Logo Preview</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setBg('navy')}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                      bg === 'navy' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                    }`}
                    aria-pressed={bg === 'navy'}
                  >
                    Dark Navy
                  </button>
                  <button
                    onClick={() => setBg('transparent')}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                      bg === 'transparent' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                    }`}
                    aria-pressed={bg === 'transparent'}
                  >
                    Transparent
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <div className={bg === 'navy' ? 'bg-[#0B1220]' : 'bg-[length:16px_16px] bg-[linear-gradient(45deg,rgba(255,255,255,0.06)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.06)_75%,rgba(255,255,255,0.06)),linear-gradient(45deg,rgba(255,255,255,0.06)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.06)_75%,rgba(255,255,255,0.06))] bg-[position:0_0,8px_8px] bg-[size:16px_16px]'}>
                  <div className="flex items-center justify-center p-10 md:p-16">
                    <Logo ref={svgRef} background={bg} />
                  </div>
                </div>
              </div>

              <Controls svgRef={svgRef} fileBaseName="mindforge-logo" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Palette />
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-white/50">
          © {new Date().getFullYear()} MindForge. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
