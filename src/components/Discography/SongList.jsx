import React from 'react';
import styles from './SongList.module.css';

const SongList = ({ songs, setSelectedVideo }) => (
  <div className={styles.songList}>
    {songs.map((song, idx) => (
      <div key={idx} className={styles.songRow}>
        {/* Imagen a la izquierda */}
        <img src={song.image} alt={song.title} className={styles.songImage} />

        {/* Info y botón a la derecha */}
        <div className={styles.songInfo}>
          <span className={styles.songTitle}>{song.title}</span>
          <span className={styles.songArtist}>{song.artist}</span>
          <button onClick={() => setSelectedVideo(song.videoId)}>🎥 Ver video</button>
        </div>
      </div>
    ))}
  </div>
);

export default SongList;
