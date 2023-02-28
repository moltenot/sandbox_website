import heroImage from "@/public/hero.jpg";
import Image from "next/image";
import styles from "@/styles/hero.module.css";
export default function Hero() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={`vflex`}>
          <div className="padder" />
          <div>
            <h1>
              <span className={styles.small}>small studio</span> <br />
              MASSIVE SOUND
            </h1>
          </div>
          <div className="padder" />
        </div>
      </div>
      <Image
        src={heroImage}
        className={styles.image}
        priority
        fill
        alt="a panorama of the Sandbox Studios"
      />
    </div>
  );
}
