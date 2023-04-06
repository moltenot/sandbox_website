import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/navlink";
import logo from "../public/black_logo.png";
import hamburger from "@/public/hamburger.svg";
import useWindowDimensions from "@/hooks/windowDimensions";
import {useState} from "react";

export default function Navbar({sections}) {
    const {width} = useWindowDimensions();
    const [expanded, setExpanded] = useState(false);


    let paths = [];
    console.log("sections", sections)
    console.log("sections length", sections.length)
    if (sections.length > 0) {
        sections.forEach(section => {
            paths.push({text: section.toUpperCase(), path: `#${section}`});
        })
    } else {
        paths = undefined;
    }
    console.log("paths", paths)
    return (
        <div className={styles.navroot}>
            <div className={`${styles.fixed} full-width`}>
                <div className={`${styles.navbar} full-width vflex`}>
                    <div className="padder"/>
                    <div>
                        <div className="cont-lg hflex">
                            <Link href={"/"}>
                                <Image src={logo} alt="Sandbox Studios Logo" height={40}/>
                            </Link>
                            <div className="flex-pad"/>
                            <div className="vflex">
                                <div className="padder"/>
                                <Image
                                    src={hamburger}
                                    className={`${styles.burger} hoverable`}
                                    alt="Hamburger icon"
                                    onClick={() => setExpanded(!expanded)}
                                />
                                <div className="padder"/>
                            </div>
                            <div className={styles.navlinkcontainer}>
                                {paths?paths.map(({path, text}) => (
                                    <NavLink path={path} text={text} key={text}/>
                                )): null}
                            </div>
                        </div>
                    </div>
                    <div className="padder"/>
                </div>
                <div>
                    <div
                        className={styles.navlinkoverflow}
                        style={{
                            display: expanded && width < 480 ? "block" : "none",
                        }}
                    >
                        {paths?paths.map(({path, text}) => (
                            <NavLink path={path} text={text} key={text}/>
                        )):null}
                    </div>
                </div>
            </div>
        </div>
    );
}
