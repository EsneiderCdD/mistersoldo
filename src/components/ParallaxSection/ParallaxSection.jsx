import React from "react";
import styles from "./ParallaxSection.module.css";
import { socialLinks } from "../../data/socialLinks";

const ParallaxSection = () => {
  return (
    <div className={styles.parallaxSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>Conóceme</h2>
        <div className={styles.buttonContainer}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <img src={link.icon} alt={link.name} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
