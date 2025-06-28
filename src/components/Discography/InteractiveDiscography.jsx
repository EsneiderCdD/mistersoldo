import React, { useRef, useState } from 'react';
import styles from './InteractiveDiscography.module.css';
import { motion, useAnimation } from 'framer-motion';
import AlbumCard from './AlbumCard';
import SongList from './SongList';
import SongModal from './SongModal';
import Album from '../../assets/images/Album.jpg';
import IP from '../../assets/images/IP.jpeg';
import { albumSongs, soloSongs } from '../../data/albumSongs';

const InteractiveDiscography = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const dropZoneRef = useRef(null);
  const albumControls = useAnimation();
  const soloControls = useAnimation();

  const [isAlbumSpinning, setIsAlbumSpinning] = useState(false);
  const [isSoloSpinning, setIsSoloSpinning] = useState(false);

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

    if (isInside) {
      setActiveCategory(category);

      if (category === 'album') {
        setActiveImage(Album);
        setIsAlbumSpinning(true);
        setIsSoloSpinning(false);
      } else if (category === 'solista') {
        setActiveImage(IP);
        setIsSoloSpinning(true);
        setIsAlbumSpinning(false);
      }
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Explora la Discografía</h2>

     

      <div ref={dropZoneRef} className={styles.dropZone}>
        <div className={styles.dropContent}>
          {activeImage ? (
            <motion.img
              src={activeImage}
              alt="Álbum seleccionado"
              className={styles.droppedImage}
              animate={(activeCategory === 'album' && isAlbumSpinning) || (activeCategory === 'solista' && isSoloSpinning)
                ? { rotate: 360 }
                : { rotate: 0 }}
              transition={(activeCategory === 'album' && isAlbumSpinning) || (activeCategory === 'solista' && isSoloSpinning)
                ? { repeat: Infinity, ease: 'linear', duration: 3 }
                : {}}
            />
          ) : (
            <>
              <span className={styles.dropIcon}>🎧</span>
              <p>Arrastra aquí el álbum o canciones que quieras escuchar</p>
            </>
          )}
        </div>
      </div>

       <div className={styles.dragContainer}>
        <motion.div
          className={styles.dragCard}
          drag
          animate={albumControls}
          onDragEnd={(e) => handleDragEnd(e, 'album')}
          whileDrag={{ scale: 1.05, zIndex: 10 }}
        >
          <AlbumCard image={Album} />
        </motion.div>

        <motion.div
          className={styles.dragCard}
          drag
          animate={soloControls}
          onDragEnd={(e) => handleDragEnd(e, 'solista')}
          whileDrag={{ scale: 1.05, zIndex: 10 }}
        >
          <AlbumCard image={IP} />
        </motion.div>
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
