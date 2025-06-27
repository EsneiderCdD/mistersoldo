import React, { useRef, useState } from 'react';
import styles from './InteractiveDiscography.module.css';
import { motion, useAnimation } from 'framer-motion';
import AlbumCard from './AlbumCard';
import SongList from './SongList';
import SongModal from './SongModal';
import Album from  '../../assets/images/Album.jpg'; // Asegúrate de que la ruta sea correcta, por ejemplo:
import IP from '../../assets/images/IP.jpeg'; // Asegúrate de que la ruta sea correcta, por ejemplo:  // src\assets\images\Album.jpg

const InteractiveDiscography = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const dropZoneRef = useRef(null);
  const albumControls = useAnimation();
  const soloControls = useAnimation();

  const albumSongs = [
    { title: 'Profesión Peligro', artist: 'MISTER SOLDO - TCLASS / AZOTE RECORDS - JAVA BLUNT - BIG CHAN', videoId: 'ZyjDsRU1jKc' },
    { title: 'Monedas de Oro', artist: 'Mister Soldo', videoId: '1yvu4XyLwWo' },
    { title: 'Caída Libre', artist: 'Mister Soldo', videoId: 'dI2y79uvqWc' },
    { title: 'Sonido Barrila', artist: 'Mister Soldo ', videoId: 'bR-NMDIMWFo' },
    { title: 'Cosas Que Pasan', artist: 'Mister Soldo', videoId: 'mmV25EsuoB4' },
    { title: 'Talento de Exportación', artist: 'Mister Soldo · tclass · Andres Felipe giraldo quintero · Julián Andrés Castañeda Restrepo · Marcos Carreño · kiño', videoId: '3DGj7By9IWg' },
    { title: 'La Mala Fama', artist: 'Mister Soldo · tclass · Andres Felipe giraldo quintero · Julián Andrés Castañeda Restrepo · Gregory Bakuis Bolívar · Rebeliouz', videoId: '6JjRnahlEQY' },
    { title: 'Advertencia', artist: 'Mister Soldo · tclass · Andres Felipe giraldo quintero · Julián Andrés Castañeda Restrepo · Juan Fernando Arenas Hernández · java blunt', videoId: 'IOqVRhPmSL4' },
    { title: 'Polifacéticos', artist: 'Mister Soldo · tclass · Andres Felipe giraldo quintero · Julián Andrés Castañeda Restrepo · Anderson Muñoz Agudelo · Qsko', videoId: 'IRn9hI_HQfg' },
    { title: 'La Misión', artist: 'Mister Soldo · tclass · Andres Felipe giraldo quintero · Julián Andrés Castañeda Restrepo · Anderson Muñoz Agudelo · Dudan Gutiérrez · James Sánchez · Gregory Bakuis Bolívar · Qsko · Niche Sanchez · ultrajala · Rebeliouz', videoId: 'JSLF-UckXi0' },
    { title: 'Monedas de Oro Remix', artist: 'Mister Soldo · tclass · Andres Felipe giraldo quintero · Julián Andrés Castañeda Restrepo · Cristian Camilo Muñoz Valbuena · Miguel Stevens Muños Valbuena · big chan · El Ovejo', videoId: 'fpmWA_xFIZU' },
   
  ];

  const soloSongs = [
    { title: 'Escucharme Sera Su Rutina', artist: 'Escucharme Sera Su Rutina · Mister Soldo · Pimpo · Andres Felipe giraldo quintero · Christofer Bakuis Bolivar', videoId: 'z8RaBiA1v0w' },
    { title: 'HELP ME', artist: 'Mister Soldo x Pipe Bega - El Tatán CB', videoId: 'ZyjDsRU1jKc' },
    { title: 'Mundo Artificial', artist: 'Mister Soldo', videoId: 'wUeVnX1mPuw' },
    { title: 'Como Fieras ', artist: 'El Tatan CB · Alias Ramirez · Mosco Caña Brava · Mister Soldo · JONATAN STIVE VIANA MORALES · Carlos Mario Rúa ', videoId: 'gfgnb3iK0z4'},
    { title: 'Caída Libre', artist: 'Mister Soldo ft Tclass ❌️Qsko', videoId: 'mcRk19VjUjo'},
    { title: 'Los Últimos Tiempos', artist: ' Mister Soldo', videoId: 'AStx6RiLzyA'},
    { title: 'Vivir y Morir en Medellín', artist: 'Tclass · Julian Andres Castañeda · ANDERSON MUÑOZ · james sanchez · gregory backuis Bolivar · Avendaño · Mister Soldo · niche sanchez · QSKO · Reveliouz', videoId: 'YEfi5Ctf5xk'},
    { title: 'Dejando Huella', artist: 'Dejando Huella · Tclass · Julian Andres Castañeda · Andres Felipe Giraldo Quintero · Mister Soldo', videoId: 'bITMveh8IdQ'},

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
            image={IP}
            title="Canciones "
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
