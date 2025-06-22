// SongModal.jsx
import React from 'react';
import styles from './InteractiveDiscography.module.css';

const SongModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default SongModal;
