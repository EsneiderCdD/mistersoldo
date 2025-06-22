// LatestReleases.jsx
import React from 'react';
import styles from './LatestReleases.module.css';

const releases = [
  {
    title: 'Último lanzamiento – Sombra Lunar',
    thumbnail: 'https://i.ytimg.com/vi/ZyjDsRU1jKc/hqdefault.jpg',
    youtubeId: 'ZyjDsRU1jKc',
    description: 'Una propuesta visual y musical que refleja la evolución artística de Wakyin.',
  },
];

const LatestReleases = () => {
  return (
    <section className={styles.latestSection}>
      <h2 className={styles.title}>🆕 Últimos Lanzamientos</h2>
      <div className={styles.releaseList}>
        {releases.map((release, idx) => (
          <div key={idx} className={styles.releaseCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${release.youtubeId}`}
                title={release.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.releaseInfo}>
              <h3>{release.title}</h3>
              <p>{release.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestReleases;
