// AlbumCard.jsx
import React from 'react';
import styles from './InteractiveDiscography.module.css';

const AlbumCard = ({ image, title  }) => (
  <div className={styles.albumCard}>
    <img
      src={image}
      alt={title}
      className={styles.albumImage}
      draggable={false}  // evita conflicto nativo del navegador
    />
    <h3>{title}</h3>
    
  </div>
);

export default AlbumCard;