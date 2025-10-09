export default function RoomCard({title, icon, description, done, children}){
  return (
    <section className="card">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-500/20 p-2">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {done && <span className="ml-auto rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300 text-xs">Validé</span>}
      </div>
      <p className="mb-4 text-zinc-300">{description}</p>
      <div>{children}</div>
    </section>
  )
}
