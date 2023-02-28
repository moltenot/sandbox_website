import Link from "next/link";
import styles from "@/styles/NavLink.module.css";

export default function NavLink({ text, path }) {
  return (
    <>
      <div className={styles.navLink}>
        <div className={styles.padder} />
        <Link href={path}>
          <div className={styles.button}>{text}</div>
        </Link>
        <div className={styles.padder} />
      </div>
    </>
  );
}
