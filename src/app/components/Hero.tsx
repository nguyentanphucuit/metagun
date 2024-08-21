import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "../page.module.css";
import playNow from "/public/assets/img/play-now.gif";
import zaloIcon from "/public/assets/img/zalo-icon.png";
import CountdownTimerComponent from "./CountdownTimer";

const Hero = () => {
  return (
    <>
      <div className="fixed bottom-4 right-4">
        <Link href="https://zalo.me/g/rldqiw474" target="_blank">
          <ExportedImage
            width={64}
            height={64}
            className="animate-bounce"
            alt="metagun button"
            src={zaloIcon}></ExportedImage>
        </Link>
      </div>
      <div className={styles.contents}>
        <div></div>
        {/* <div className={styles.logo}>
          <ExportedImage
            width={200}
            height={200}
            alt="metagun button"
            src={logoMetagun}></ExportedImage>
        </div> */}

        {/* <h1>Deep blue cinematics</h1>
        <div className={styles.buttons}>
          <button>Out work</button>
          <button>Out story</button>
        </div> */}
        <Link href="http://metagun.net">
          <ExportedImage
            className="animate-bounce"
            width={364}
            height={112}
            alt="metagun button"
            src={playNow}></ExportedImage>
        </Link>
      </div>
      <CountdownTimerComponent />

      <video autoPlay loop muted preload="none" className={styles.video}>
        <source
          src="https://metagun.vn/assets/video/background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Hero;
