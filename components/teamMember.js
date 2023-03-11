import Image from "next/image";
import styles from "@/styles/teamMember.module.css"

export default function TeamMember({imageSrc, name, role, links, bio}) {
    const imageDim = 300
    return <div className={styles.root}>
        <Image src={imageSrc} style={{objectFit: "cover"}} alt={`photo of ${name}`} width={imageDim} height={imageDim}/>
        <h2>{name}</h2>
        <p>{role}</p>
        <div className={styles.sociallinks}>{links}</div>
        {bio}
    </div>
}