import { useState } from 'react'

export default function ForestRoom({onSolve}){
  const [answer, setAnswer] = useState('')
  const [ok, setOk] = useState(false)

  const check = () => {
    const good = answer.trim().toLowerCase() === 'photosynthese'
    setOk(good)
    if (good) onSolve?.()
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-300">
        Les arbres dépérissent. Complétez le mot clé du processus qui transforme CO₂ + H₂O en O₂ + glucose :
      </p>
      <div className="flex items-center gap-2">
        <span className="rounded bg-zinc-800 px-2 py-1">PH__OSY_NTHESE</span>
        <input value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Réponse"
          className="rounded-xl bg-zinc-800/70 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
        <button onClick={check} className="btn-primary">Valider</button>
      </div>
      {ok && <p className="text-emerald-300">✅ Flux de sève rétabli !</p>}
      {!ok && answer && <p className="text-red-300">❌ Indice : commence par “photo…”.</p>}
      <details className="mt-2">
        <summary className="cursor-pointer text-sm text-zinc-400">Débrief</summary>
        <p className="text-sm text-zinc-300 mt-1">
          La photosynthèse produit l'oxygène et stocke du carbone. Préserver les forêts = préserver le climat.
        </p>
      </details>
    </div>
  )
}
