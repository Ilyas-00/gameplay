export default function Modal({open, onClose, title, children}){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60">
      <div className="card w-[min(560px,92%)]">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="btn-ghost" aria-label="Fermer">✕</button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  )
}
