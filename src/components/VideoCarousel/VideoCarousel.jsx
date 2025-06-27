import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./VideoCarousel.module.css";
import { videos } from "../../data/videos";

const VideoCarousel = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Momentos Destacados</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id} className={styles.slide}>
            <div className={styles.videoWrapper}>
              <video
                src={video.src}
                controls
                className={styles.video}
              />
              <p className={styles.description}>{video.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
