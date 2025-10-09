import { useEffect, useState } from 'react'

export default function Timer({ initialMinutes = 40, onExpire }){
  const [seconds, setSeconds] = useState(initialMinutes * 60)

  useEffect(() => {
    const saved = localStorage.getItem('otp_timeLeft')
    if (saved) setSeconds(parseInt(saved,10))
  }, [])

  useEffect(() => {
    if (seconds <= 0) { onExpire?.(); return }
    const id = setInterval(() => setSeconds(s => s - 1), 1000)
    return () => clearInterval(id)
  }, [seconds, onExpire])

  useEffect(() => {
    localStorage.setItem('otp_timeLeft', String(seconds))
  }, [seconds])

  const m = Math.floor(seconds / 60).toString().padStart(2,'0')
  const s = (seconds % 60).toString().padStart(2,'0')
  const pct = Math.max(0, Math.min(100, (seconds / (initialMinutes*60)) * 100))

  return (
    <div className="card flex items-center justify-between gap-4">
      <div>
        <div className="text-xs uppercase text-zinc-400">Temps restant</div>
        <div className="text-3xl font-extrabold tabular-nums">{m}:{s}</div>
      </div>
      <div className="h-3 flex-1 rounded-full bg-zinc-800 overflow-hidden">
        <div className="h-full bg-emerald-500" style={{width: pct+'%'}} aria-hidden />
      </div>
    </div>
  )
}
