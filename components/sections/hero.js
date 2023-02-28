import heroImage from "@/public/hero.jpg";
import Image from "next/image";
import styles from "@/styles/hero.module.css";
import Link from "next/link";
export default function Hero() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={`vflex`}>
          <div className="padder" />
          <div className={styles.textcontainer}>
            <h1>
              <span className={styles.small}>small studio</span> <br />
              MASSIVE SOUND
            </h1>
            <Link href="tel:0800 788346">
              <div className={styles.callme}>Call 0800 STUDIO</div>
            </Link>
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
