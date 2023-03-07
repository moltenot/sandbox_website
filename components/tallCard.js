import Image from "next/image";
import styles from "@/styles/tallCard.module.css";

export default function TallCard({ imageSrc, alt, header, paragraph }) {
  const width = 200;
  const height = 150
  return (
    <>
      <div className={styles.container}>
        <Image
          src={imageSrc}
          blurDataURL
          style={{ objectFit: "cover" }}
          alt={alt}
          height={height}
          width={width}
        />
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
    </>
  );
}
