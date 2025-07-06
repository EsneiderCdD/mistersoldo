// SongList.jsx
import React from 'react';
import styles from './SongList.module.css';

const SongList = ({ songs, setSelectedVideo }) => (
  <div className={styles.songList}>
    {songs.map((song, idx) => (
      <div key={idx} className={styles.songRow} style={{ backgroundImage: `url(${song.image})` }}>
        <div className={styles.songOverlay}>
          <div className={styles.songText}>
            <span className={styles.songTitle}>{song.title}</span>
            <span className={styles.songArtist}>{song.artist}</span>
            <button onClick={() => setSelectedVideo(song.videoId)}>🎵 Escuchar</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default SongList;
