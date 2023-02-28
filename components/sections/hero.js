import heroImage from "@/public/hero.jpg";
import Image from "next/image";
import styles from "@/styles/hero.module.css";
export default function Hero() {
  return (
    <div className={styles.root}>
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
