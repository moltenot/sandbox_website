import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import logo from "../public/black_logo.png";
import NavLink from "./navlink";

export default function Navbar() {
  const paths = [
    { text: "TEAM", path: "/team" },
    { text: "MENU", path: "/menu" },
    { text: "GEAR", path: "/gear" },
  ];
  return (
    <div className={`${styles.navbar} full-width`}>
      <div className="max-width-large horizontal-flex">
        <Image src={logo} alt="Sandbox Studios Logo" height={50} />
        <div className="flex-pad full-width"/>
        {paths.map(NavLink)}
      </div>
    </div>
  );
}
