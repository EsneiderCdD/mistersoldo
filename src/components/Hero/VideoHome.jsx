import React from 'react'
import styles from '../../components/Hero/VideoHome.module.css'
import videoBg from '../../assets/videos/MISTERSOLDOHOME.mp4'
import Logo2 from '../../assets/images/Logo2.png' 

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
        <img src={Logo2} alt="Logo Mister Soldo" className={styles.logo} />
       
      </div>
    </section>
  )
}

export default VideoHome
