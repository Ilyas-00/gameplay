export default function ProgressBar({steps=3, passed=0}){
  return (
    <div className="card">
      <div className="mb-1 text-xs uppercase text-zinc-400">Progression</div>
      <div className="flex gap-2">
        {Array.from({length: steps}).map((_,i)=>(
          <div key={i} className={`h-2 flex-1 rounded-full ${i < passed ? 'bg-emerald-500' : 'bg-zinc-800'}`} />
        ))}
      </div>
    </div>
  )
}
