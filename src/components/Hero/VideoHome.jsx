import React from 'react'
import styles from '../../components/Hero/VideoHome.module.css'
import videoBg from '../../assets/videos/MISTERSOLDOHOME.mp4'

const VideoHome = () => {
  return (
    <section className={styles.videoHome}>
      <video
        className={styles.videoBg}
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.videoOverlay}>
        <h1 className={styles.videoTitle}>MISTER SOLDO</h1>
       
      </div>
    </section>
  )
}

export default VideoHome
