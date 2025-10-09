import { useState } from 'react'

export default function WaterRoom({onSolve}){
  const [values, setValues] = useState({a:'', b:'', c:''})
  const [ok, setOk] = useState(false)

  const solution = {a:'PET', b:'PEHD', c:'PP'} // plastiques triés

  const check = () => {
    const good = Object.keys(solution).every(k => values[k].toUpperCase() === solution[k])
    setOk(good)
    if (good) onSolve?.()
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-300">
        Des microplastiques sont détectés. Identifiez les 3 types les plus trouvés
        dans l'océan à trier (abréviations) :
        <span className="ml-2 rounded bg-zinc-800 px-2 py-0.5 text-xs">PET</span>,
        <span className="ml-2 rounded bg-zinc-800 px-2 py-0.5 text-xs">PEHD</span>,
        <span className="ml-2 rounded bg-zinc-800 px-2 py-0.5 text-xs">PP</span>.
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {['a','b','c'].map(k=>(
          <input key={k} value={values[k]} onChange={e => setValues(v=>({...v,[k]:e.target.value}))}
            placeholder={`Type ${k.toUpperCase()}`} className="w-full rounded-xl bg-zinc-800/70 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
        ))}
      </div>
      <button onClick={check} className="btn-primary">Valider</button>
      {ok && <p className="text-emerald-300">✅ Filtration amorcée !</p>}
      {!ok && (values.a||values.b||values.c) && <p className="text-red-300">❌ Réessayez avec les bonnes abréviations.</p>}
      <details className="mt-2">
        <summary className="cursor-pointer text-sm text-zinc-400">Débrief</summary>
        <p className="text-sm text-zinc-300 mt-1">
          PET, PEHD et PP sont parmi les polymères les plus retrouvés en mer. Le tri et la réduction à la source sont essentiels.
        </p>
      </details>
    </div>
  )
}
