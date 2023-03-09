import Link from "next/link";
import styles from "@/styles/NavLink.module.css";
import { useRouter } from "next/router";

export default function NavLink({ text, path }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.navLink}>
        <div className="flex-pad" />
        <Link href={path}>
          <div
            className={` ${styles.button} hoverable`}
            style={{
              textDecorationLine: router.asPath == path ? "underline" : "none",
              textDecorationThickness: "2px"
            }}
          >
            {text}
          </div>
        </Link>
        <div className="flex-pad" />
      </div>
    </>
  );
}
