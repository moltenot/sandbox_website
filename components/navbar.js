import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/black_logo.png";
import NavLink from "./navlink";
import hamburger from "@/public/hamburger.svg";
import { useState } from "react";
import useWindowDimensions from "@/hooks/windowDimensions";

export default function Navbar() {
  const {height, width} =useWindowDimensions();
  const [expanded, setExpanded] = useState(false);
  const paths = [
    { text: "TEAM", path: "/team" },
    { text: "MENU", path: "/menu" },
    { text: "GEAR", path: "/gear" },
  ];


  return (
    <div>
      <div className={`${styles.navbar} full-width vflex`}>
        <div className="padder" />
        <div>
          <div className="max-width-large hflex">
            <Link href={"/"}>
              <Image src={logo} alt="Sandbox Studios Logo" height={50} />
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
            <div className={styles.navlinkcontainer}>{paths.map(NavLink)}</div>
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
          {paths.map(NavLink)}
        </div>
      </div>
    </div>
  );
}
