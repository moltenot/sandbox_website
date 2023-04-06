import Link from "next/link";
import styles from "@/styles/NavLink.module.css";

export default function NavLink({text, path}) {
    return (
        <>
            <div className={styles.navLink}>
                <div className="flex-pad"/>
                <Link href={path}>
                    <div className={`${styles.button} hoverable`}>
                        {text}
                    </div>
                </Link>
                <div className="flex-pad"/>
            </div>
        </>
    );
}
