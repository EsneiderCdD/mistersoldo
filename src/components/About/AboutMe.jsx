import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './AboutMe.module.css'

import { X } from 'lucide-react'
import Logo from '../../assets/images/Logo.jpeg'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 }
  })
}

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section className={styles.about} id="about-me">
      <motion.h2
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={textVariants}
      >
        {/* Puedes agregar título aquí si quieres */}
      </motion.h2>

      <img src={Logo} alt="Logo Mister Soldo" className={styles.logo} />

      <motion.p
        className={styles.text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={textVariants}
      >
        Mister Soldo es un artista envigadeño apasionado por el Rap y el Hip‑Hop,
        que desde las calles de Envigado ha buscado fusionar ritmos urbanos con
        mensajes profundos sobre justicia social, identidad local y esperanza.
      </motion.p>

      <motion.p
        className={styles.text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={textVariants}
      >
        Su recorrido musical combina líricas sinceras con beats potentes,
        reflejando esa energía auténtica que caracteriza su ciudad natal. Con
        cada canción, Mister Soldo busca conectar con la comunidad y ser voz de
        quienes no siempre la tienen.
      </motion.p>

      <motion.p
        className={styles.text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={textVariants}
      >
        Descubre más sobre sus proyectos, colaboraciones y próximos lanzamientos
        en redes sociales y plataformas digitales.
      </motion.p>

      {/* Botón con imagen como poster */}
      <div className={styles.videoThumbnail} onClick={openModal}>
        <div className={styles.youtubePlayButton}>
          <div className={styles.playTriangle}></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={30} />
            </button>
            {/* YouTube Embed */}
            <div className={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yCDksIhKxlk?si=8xNFlkuUmubUfKAy&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutMe
