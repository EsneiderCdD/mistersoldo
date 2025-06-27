import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./Carrusel.module.css";

// Importación directa de imágenes locales
import a from "../../assets/images/a.jpeg";
import b from "../../assets/images/b.jpeg";
import c from "../../assets/images/c.jpeg";
import d from "../../assets/images/d.jpeg";
import e from "../../assets/images/e.jpeg";
import f from "../../assets/images/f.jpeg";
import g from "../../assets/images/g.jpeg";
import h from "../../assets/images/h.jpeg";
import i from "../../assets/images/i.jpeg";
import j from "../../assets/images/j.jpeg";
import k from "../../assets/images/k.jpeg";
import Mr3 from "../../assets/images/Mr3.jpeg";

const images = [Mr3,k, , c, d, e ,h, b, f, g,a, i, j, ];

const Carrusel1 = () => {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={src} alt={`slide-${index}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel1;


