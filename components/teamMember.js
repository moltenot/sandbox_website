import Image from "next/image";
import styles from "@/styles/teamMember.module.css"

export const IMAGE_DIM = 200

export default function TeamMember({imageSrc, name, role, links, bio}) {
    return <div className={styles.root}>
        <div className={`${styles.container} hflex`}>
            <Image src={imageSrc} style={{objectFit: "cover"}} alt={`photo of ${name}`} width={IMAGE_DIM}
                   height={IMAGE_DIM}/>
            <div className="cont-md">
                <h2>{name}</h2>
                <p>{role}</p>
                <div className={styles.sociallinks}>{links}</div>
                {bio}
            </div>
        </div>
    </div>
}
