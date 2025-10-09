import { useState } from 'react'

export default function AirRoom({onSolve}){
  const [co2, setCo2] = useState(420)
  const [ok, setOk] = useState(false)

  const check = () => {
    const good = co2 >= 350 && co2 <= 450
    setOk(good)
    if (good) onSolve?.()
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-300">
        Stabilisez la concentration de CO₂ atmosphérique (ppm) dans une fenêtre acceptable (350–450 ppm) pour éviter les extrêmes.
      </p>
      <input type="range" min="300" max="500" value={co2}
        onChange={e=>setCo2(parseInt(e.target.value,10))}
        className="w-full" aria-label="CO2 (ppm)" />
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tabular-nums">{co2} ppm</div>
        <button onClick={check} className="btn-primary">Verrouiller</button>
      </div>
      {ok && <p className="text-emerald-300">✅ Équilibre temporaire atteint.</p>}
      {!ok && <p className="text-red-300">❌ Trop bas ou trop haut — ajustez.</p>}
      <details className="mt-2">
        <summary className="cursor-pointer text-sm text-zinc-400">Débrief</summary>
        <p className="text-sm text-zinc-300 mt-1">
          La hausse rapide du CO₂ intensifie l'effet de serre. La neutralité carbone vise à stabiliser ce niveau à long terme.
        </p>
      </details>
    </div>
  )
}
