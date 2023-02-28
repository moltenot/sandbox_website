import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/black_logo.png";
import NavLink from "./navlink";
import hamburger from "@/public/hamburger.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const [isDesktop, setMatches] = useState(
    window.matchMedia("(min-width: 480px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 480px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const paths = [
    { text: "TEAM", path: "/team" },
    { text: "MENU", path: "/menu" },
    { text: "GEAR", path: "/gear" },
  ];
  return (
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
          <div
            className={styles.navlinkcontainer}
            style={{
              display: expanded || isDesktop ? "block" : "none",
            }}
          >
            {paths.map(NavLink)}
          </div>
        </div>
      </div>
      <div className="padder" />
    </div>
  );
}
