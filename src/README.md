/src
├── /assets           → Imágenes, videos, audios, íconos
│   ├── /images
│   ├── /videos
│   └── /audio
│
├── /components       → Componentes reutilizables
│   ├── /Carousel
│   ├── /VideoPlayer
│   ├── /AudioPlayer
│   ├── /Card
│   ├── /Modal
│   └── index.js
│
├── /sections         → Cada bloque visual de la landing
│   ├── /Hero
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── /About
│   │   ├── About.jsx
│   │   └── About.module.css
│   ├── /Carrusel1
│   ├── /Carrusel2
│   ├── /Discografia
│   ├── /Destacados
│   ├── /Footer
│   └── index.js
│
├── /data             → JSON con álbumes, canciones, destacados, etc.
│   ├── albums.json
│   ├── tracks.json
│   └── featured.json
│
├── /utils            → Funciones helper (formatDuration, scrollTo, etc.)
│
├── /hooks            → Hooks personalizados (useAudio, useModal, etc.)
│
├── /constants        → Rutas, enlaces, config, textos fijos
│   ├── urls.js
│   └── siteData.js
│
├── App.jsx
├── main.jsx
└── index.css
