import styles from '@/styles/basicSection.module.css';

export default function BasicSection({id, header, children, backgroundColor, backgroundImage}) {

    let backgroundStyle ={};
    if (backgroundColor) backgroundStyle.backgroundColor = backgroundColor;
    if (backgroundImage) backgroundStyle.backgroundImage = backgroundImage;


    return <section id={id}>
        <div className={styles.background} style={backgroundStyle}>
            <div className={`cont-lg`} >
                <h1 className={styles.header}>{header}</h1>
                {children}
            </div>
        </div>
    </section>
}
