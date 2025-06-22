import React, { useRef, useState } from 'react';
import styles from './InteractiveDiscography.module.css';
import { motion, useAnimation } from 'framer-motion';
import AlbumCard from './AlbumCard';
import SongList from './SongList';
import SongModal from './SongModal';
import Album from  '../../assets/images/Album.jpg'; // Asegúrate de que la ruta sea correcta, por ejemplo:

const InteractiveDiscography = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const dropZoneRef = useRef(null);
  const albumControls = useAnimation();
  const soloControls = useAnimation();

  const albumSongs = [
    { title: 'Intro Luz', artist: 'Wakyin', videoId: 'ZyjDsRU1jKc' },
    { title: 'Versos del Barrio', artist: 'Wakyin ft. Lirika', videoId: 'bR-NMDIMWFo' },
  ];

  const soloSongs = [
    { title: 'Sombra Libre', artist: 'Wakyin', videoId: 'gFZfwWZV074' },
    { title: 'Caminos Rotos', artist: 'Wakyin', videoId: 'iF0ljVgRytU' },
  ];

  const handleDragEnd = async (event, category) => {
    const dropRect = dropZoneRef.current?.getBoundingClientRect();
    const draggedRect = event.target?.getBoundingClientRect();

    const isInside =
      dropRect &&
      draggedRect &&
      draggedRect.left < dropRect.right &&
      draggedRect.right > dropRect.left &&
      draggedRect.top < dropRect.bottom &&
      draggedRect.bottom > dropRect.top;

    // Siempre volverá a la posición original visualmente
    if (category === 'album') {
      await albumControls.start({ x: 0, y: 0, transition: { type: 'spring', stiffness: 500, damping: 30 } });
    } else if (category === 'solista') {
      await soloControls.start({ x: 0, y: 0, transition: { type: 'spring', stiffness: 500, damping: 30 } });
    }

    // Si se soltó dentro del dropzone, actualiza la vista
    if (isInside) {
      setActiveCategory(category);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Explora la Discografía</h2>

      <div className={styles.dragContainer}>
        <motion.div
          className={styles.dragCard}
          drag
          animate={albumControls}
          onDragEnd={(e) => handleDragEnd(e, 'album')}
          whileDrag={{ scale: 1.05, zIndex: 10 }}
        >
          <AlbumCard
            image={Album}
            title="Monedas de Oro"
            description="Un viaje por las calles y la poesía de la ciudad."
          />
        </motion.div>

        <motion.div
          className={styles.dragCard}
          drag
          animate={soloControls}
          onDragEnd={(e) => handleDragEnd(e, 'solista')}
          whileDrag={{ scale: 1.05, zIndex: 10 }}
        >
          <AlbumCard
            image="https://i.pinimg.com/736x/c9/08/9b/c9089b98146e38cccb243d3d4a2d6963.jpg"
            title="Canciones Sueltas"
            description="Temas individuales que marcan estilo propio."
          />
        </motion.div>
      </div>

      <div ref={dropZoneRef} className={styles.dropZone}>
        <div className={styles.dropContent}>
          <span className={styles.dropIcon}>🎧</span>
          <p>Arrastra aquí el álbum o canciones que quieras escuchar</p>
        </div>
      </div>

      {activeCategory === 'album' && (
        <SongList songs={albumSongs} setSelectedVideo={setSelectedVideo} />
      )}
      {activeCategory === 'solista' && (
        <SongList songs={soloSongs} setSelectedVideo={setSelectedVideo} />
      )}

      <SongModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};

export default InteractiveDiscography;
