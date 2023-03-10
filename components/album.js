import Image from "next/image";
import styles from '@/styles/album.module.css'


export default function Album({ name, imageSrc, artist, href, size }) {
  return (
    <div className={styles.container}>
      <div className={styles.text} >
        {name}
        <br /> {artist}
      </div>
      <Image
        src={imageSrc}
        width={size}
        height={size}
        alt={`Album art for ${name}`}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
