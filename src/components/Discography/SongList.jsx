// SongList.jsx
import React from 'react';
import styles from './InteractiveDiscography.module.css';

const SongList = ({ songs, setSelectedVideo }) => (
  <div className={styles.songList}>
    {songs.map((song, idx) => (
      <div key={idx} className={styles.songRow}>
        <span className={styles.songTitle}>{song.title}</span>
        <span className={styles.songArtist}>{song.artist}</span>
        <button onClick={() => setSelectedVideo(song.videoId)}>🎥 Ver video</button>
      </div>
    ))}
  </div>
);

export default SongList;
