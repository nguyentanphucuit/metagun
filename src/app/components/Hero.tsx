import React from "react";
import Image from "next/image";
import background from "/public/assets/img/bgyeugunny.png";
import bgMetagun from "/public/assets/img/bgmetagun1.jpg";
import logoMetagun from "/public/assets/img/metagun-logo-nobg.png";
import playNow from "/public/assets/img/play-now.gif";
import styles from "../page.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <Image
            width={200}
            height={200}
            alt="metagun button"
            src={logoMetagun}></Image>
        </div>

        <h1>Deep blue cinematics</h1>
        <div className={styles.buttons}>
          <button>Out work</button>
          <button>Out story</button>
        </div>
        <Image
          className="animate-bounce"
          width={364}
          height={112}
          alt="metagun button"
          src={playNow}></Image>
      </div>

      <video autoPlay loop muted preload="none" className={styles.video}>
        <source
          src="https://img.zing.vn/products/gn/landing/2021-chuong-ga-tranh-ba/images/video-bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Hero;
