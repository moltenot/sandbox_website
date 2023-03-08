import styles from "@/styles/subtleButton.module.css"
import Link from "next/link";

export default function SubtleButton({ text, href, clickHandler }) {
  return (
    <>
      <Link href={href || "javascript:void(0)"} onClick={clickHandler}>
        <div className={styles.btn}>{text}</div>
      </Link>
    </>
  );
}
