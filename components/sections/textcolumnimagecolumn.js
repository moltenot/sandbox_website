import Image from "next/image";
import styles from "@/styles/textColumnImageColumn.module.css";

export default function TextColumnImageColumn({ children, image, alt }) {
  return (
    <div className={`${styles.container} cont-lg`}>
      <div className={styles.textcontainer}>{children}</div>
      <div className={styles.imgcontainer}>
        <Image className={styles.image} fill src={image} alt={alt} />
      </div>
    </div>
  );
}
