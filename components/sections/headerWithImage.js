import styles from "@/styles/headerWithImage.module.css"
import Image from "next/image";

export default function HeaderWithImage({imageSrc, alt, headerText}) {
    return (
        <div className={styles.root}>
            <Image src={imageSrc} alt={alt} blurDataURL style={{objectFit: "cover"}} fill />
            <div className="vflex">
                <div className="flex-pad"/>
                <h1>{headerText}</h1>
                <div className="flex-pad"/>
            </div>
        </div>
    )
}