import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/black_logo.png";
import NavLink from "./navlink";

export default function Navbar() {
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
          {paths.map(NavLink)}
        </div>
      </div>
      <div className="padder" />
    </div>
  );
}
