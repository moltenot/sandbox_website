import Image from "next/image";
import styles from "@/styles/textColumnImageColumn.module.css";

export default function TextColumnImageColumn({ children, image, alt }) {
  return (
    <div className={styles.container}>
      {children}
      <Image src={image} alt={alt} />
    </div>
  );
}
