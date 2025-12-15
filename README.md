# Opération Terre Pure — Escape Game (lycéens)

Un **escape game numérique** court et pédagogique sur le **thème de l'environnement**.  
Objectif clair : **réactiver le Purificateur Global** en réparant **3 modules** (Eau, Forêt, Air) avant la fin du **compte à rebours**.

## Démo locale
```bash
npm install
npm run dev
```

## Build & déploiement
- **Netlify / Vercel** : importer le repo, commande de build `npm run build`, dossier `dist`.
- **GitHub Pages** : build, puis servir `dist/` avec un provider statique ou utiliser une action de déploiement.
- **Vite** : aucune variable d'environnement requise.

## Gameplay (résumé)
- **Temps** : 40 minutes.
- **3 salles** : Eau (microplastiques), Forêt (photosynthèse), Air (CO₂).
- **Coop locale** optionnelle (indices/partage d'écran). Le multijoueur réseau peut être ajouté plus tard (Socket.IO).

## Stack
- **Vite + React 18**
- **Tailwind CSS**
- Accessibilité (contrastes élevés, focus visible, clavier OK).

## Structure
```
operation-terre-pure/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Timer.jsx
│   │   ├── RoomCard.jsx
│   │   ├── Modal.jsx
│   │   └── ProgressBar.jsx
│   ├── puzzles/
│   │   ├── WaterRoom.jsx
│   │   ├── ForestRoom.jsx
│   │   └── AirRoom.jsx
│   ├── main.jsx
│   └── styles.css
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```


## 📚 Licence
MIT
