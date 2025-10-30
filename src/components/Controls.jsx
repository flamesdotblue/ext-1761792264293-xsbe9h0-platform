function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function getInlineSvg(svgEl) {
  const clone = svgEl.cloneNode(true)
  // Ensure XMLNS present
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  const serializer = new XMLSerializer()
  const svgString = serializer.serializeToString(clone)
  return svgString
}

export default function Controls({ svgRef, fileBaseName = 'logo' }) {
  const handleDownloadSVG = () => {
    const svgEl = svgRef.current
    if (!svgEl) return
    const svgString = getInlineSvg(svgEl)
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    downloadBlob(blob, `${fileBaseName}.svg`)
  }

  const handleDownloadPNG = async () => {
    const svgEl = svgRef.current
    if (!svgEl) return
    const svgString = getInlineSvg(svgEl)
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    const img = new Image()
    // Improve text rendering on dark backgrounds
    img.decode?.()
    img.onload = () => {
      const scale = 3 // 3x for crispness
      const canvas = document.createElement('canvas')
      canvas.width = img.width * scale
      canvas.height = img.height * scale
      const ctx = canvas.getContext('2d')
      ctx.scale(scale, scale)
      ctx.drawImage(img, 0, 0)
      canvas.toBlob((blob) => {
        if (blob) downloadBlob(blob, `${fileBaseName}.png`)
        URL.revokeObjectURL(url)
      }, 'image/png')
    }
    img.onerror = () => URL.revokeObjectURL(url)
    img.src = url
  }

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
      <div className="text-xs text-white/60">
        Export the current preview as SVG or PNG.
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleDownloadSVG}
          className="rounded-md bg-white text-black px-3 py-2 text-sm font-semibold hover:bg-white/90 active:translate-y-[1px]"
        >
          Download SVG
        </button>
        <button
          onClick={handleDownloadPNG}
          className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 active:translate-y-[1px]"
        >
          Download PNG
        </button>
      </div>
    </div>
  )
}
