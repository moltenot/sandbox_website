import styles from  "@/styles/Navbar.module.css";
import Image from "next/image";
import logo from "../public/logo.png"
export default function Navbar() {
  return <div className={`${styles.navbar} full-width`}>
    <Image src={logo} alt="Sandbox Studios Logo" height={56}/>
    Hello</div>;
}
