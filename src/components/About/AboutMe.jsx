// src/components/AboutMe/AboutMe.jsx
import React from 'react'
import { motion } from 'framer-motion'
import styles from './AboutMe.module.css'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 }
  })
}

const AboutMe = () => {
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
        Sobre Mister Soldo
      </motion.h2>
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

      <h1>*AQUI VA EL VIDEO SOBRE MI*</h1>
    </section>
  )
}

export default AboutMe
