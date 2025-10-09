import { useEffect, useState } from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import RoomCard from './components/RoomCard'
import ProgressBar from './components/ProgressBar'
import Modal from './components/Modal'

import WaterRoom from './puzzles/WaterRoom'
import ForestRoom from './puzzles/ForestRoom'
import AirRoom from './puzzles/AirRoom'

function usePersisted(key, initial){
  const [value, setValue] = useState(()=>{
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initial
  })
  useEffect(()=>{ localStorage.setItem(key, JSON.stringify(value)) }, [key, value])
  return [value, setValue]
}

export default function App(){
  const [solved, setSolved] = usePersisted('otp_solved', {water:false, forest:false, air:false})
  const [open, setOpen] = useState(false)
  const passed = Object.values(solved).filter(Boolean).length

  const reset = () => {
    localStorage.clear()
    location.reload()
  }

  const allSolved = passed === 3

  useEffect(()=>{
    if (allSolved) setOpen(true)
  }, [allSolved])

  return (
    <div>
      <Header onReset={reset}/>

      <main className="mx-auto my-6 w-[min(1100px,95%)] space-y-6">
        <Timer initialMinutes={40} onExpire={()=>setOpen(true)} />
        <ProgressBar steps={3} passed={passed} />

        <section className="grid gap-6 md:grid-cols-2">
          <RoomCard
            title="Module Eau"
            description="Filtrez les microplastiques en identifiant les polymères dominants."
            done={solved.water}
            icon={<span aria-hidden>🌊</span>}
          >
            <WaterRoom onSolve={()=>setSolved(s=>({...s, water:true}))} />
          </RoomCard>

          <RoomCard
            title="Module Forêt"
            description="Restaurez la photosynthèse pour ranimer l'écosystème."
            done={solved.forest}
            icon={<span aria-hidden>🌳</span>}
          >
            <ForestRoom onSolve={()=>setSolved(s=>({...s, forest:true}))} />
          </RoomCard>

          <RoomCard
            title="Module Air"
            description="Stabilisez la concentration de CO₂ dans une plage acceptable."
            done={solved.air}
            icon={<span aria-hidden>🌬️</span>}
          >
            <AirRoom onSolve={()=>setSolved(s=>({...s, air:true}))} />
          </RoomCard>

          <section className="card flex flex-col justify-center">
            <h2 className="mb-2 text-lg font-semibold">Objectif</h2>
            <p className="text-zinc-300">
              Réactivez le <strong>Purificateur Global</strong> en validant les trois modules.
              Coopérez, communiquez, et surveillez le compte à rebours.
            </p>
            <div className="mt-4 flex gap-2">
              <a className="btn-ghost" href="https://fr.wikipedia.org/wiki/Pollution_plastique" target="_blank" rel="noreferrer">En savoir plus : Plastiques</a>
              <a className="btn-ghost" href="https://fr.wikipedia.org/wiki/Photosynth%C3%A8se" target="_blank" rel="noreferrer">Photosynthèse</a>
              <a className="btn-ghost" href="https://fr.wikipedia.org/wiki/Dioxyde_de_carbone" target="_blank" rel="noreferrer">CO₂</a>
            </div>
          </section>
        </section>
      </main>

      <Modal open={open} onClose={()=>setOpen(false)} title={allSolved ? 'Mission accomplie 🎉' : 'Temps écoulé ⏳'}>
        {allSolved ? (
          <div className="space-y-3">
            <p>Bravo ! Les trois modules sont rétablis. Le Purificateur Global redémarre.</p>
            <p className="text-sm text-zinc-300">À retenir : réduire les plastiques, protéger les forêts, stabiliser le CO₂.</p>
            <button className="btn-primary" onClick={()=>setOpen(false)}>Continuer</button>
          </div>
        ) : (
          <div className="space-y-3">
            <p>La Terre a besoin de vous. Analysez vos erreurs et retentez.</p>
            <button className="btn-primary" onClick={()=>setOpen(false)}>Réessayer</button>
          </div>
        )}
      </Modal>

      <footer className="mx-auto mb-10 w-[min(1100px,95%)] text-center text-xs text-zinc-500">
        Fait avec ❤️ — <a className="underline" href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite</a> + <a className="underline" href="https://react.dev" target="_blank" rel="noreferrer">React</a> + Tailwind
      </footer>
    </div>
  )
}
