export default function Header({onReset}){
  return (
    <header className="sticky top-0 z-10">
      <div className="glass mx-auto mt-4 w-[min(1100px,95%)] rounded-3xl px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="logo" className="h-8 w-8 animate-float" />
            <div>
              <h1 className="text-xl font-bold tracking-tight">Opération Terre Pure</h1>
              <p className="text-sm text-zinc-400">Rétablissez le Purificateur Global</p>
            </div>
          </div>
          <button className="btn-ghost" onClick={onReset} aria-label="Réinitialiser la partie">
            Réinitialiser
          </button>
        </div>
      </div>
    </header>
  )
}
