import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/black_logo.png";
import NavLink from "./navlink";
import hamburger from "@/public/hamburger.svg";
import { useState } from "react";
import useWindowDimensions from "@/hooks/windowDimensions";

export const PATHS = [
  { text: "THE MENU", path: "/menu" },
  { text: "FRONT OF HOUSE", path: "/team" },
  { text: "GEAR", path: "/gear" },
];
export default function Navbar() {
  const { width } = useWindowDimensions();
  const [expanded, setExpanded] = useState(true);


  return (
    <div className={styles.navroot}>
      <div className={`${styles.fixed} full-width`}>
      <div className={`${styles.navbar} full-width vflex`}>
        <div className="padder" />
        <div>
          <div className="cont-lg hflex">
            <Link href={"/"}>
              <Image src={logo} alt="Sandbox Studios Logo" height={40} />
            </Link>
            <div className="flex-pad full-width" />
            <div className="vflex">
              <div className="padder" />
              <Image
                src={hamburger}
                className={`${styles.burger} hoverable`}
                alt="Hamburger icon"
                onClick={() => setExpanded(!expanded)}
              />
              <div className="padder" />
            </div>
            <div className={styles.navlinkcontainer}>
              {PATHS.map(({ path, text }) => (
                <NavLink path={path} text={text} key={text} />
              ))}
            </div>
          </div>
        </div>
        <div className="padder" />
      </div>
      <div>
        <div
          className={styles.navlinkoverflow}
          style={{
            display: expanded && width < 480 ? "block" : "none",
          }}
        >
          {PATHS.map(({ path, text }) => (
            <NavLink path={path} text={text} key={text} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
