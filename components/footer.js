import styles from "@/styles/footer.module.css";
import Link from "next/link";
import FooterList from "./footerlist";
export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={`cont-md ${styles.container}`}>
        <FooterList headerText={"Legal"}>
          <ul>
            <li>Terms and Conditions</li>
            <li>Booking and Cancellation</li>
            <li>Website and Privacy</li>
          </ul>
        </FooterList>
        <FooterList headerText={"Address"}>
          <ul>
            <li>
              Floor 9, 104 The Terrace <br /> Wellington, 6011 <br /> New
              Zealand
            </li>
            <li> <Link href={"tel:0800 788346"}>0800 STUDIO</Link>
              <br /> <Link href={"0800 788346"}>0800 788346</Link>
            </li>
            <li>
              <Link href={" https://sandboxstudio.co.nz/"}>
                https://sandboxstudio.co.nz/
              </Link>
            </li>
            <li>
                <Link href={"mailto:sandboxstudionz@gmail.com"}>sandboxstudionz@gmail.com</Link>
                </li>
          </ul>
        </FooterList>
        <FooterList headerText={"Social"}>
          <ul>
            <li>
                <Link href={"https://www.facebook.com/SandboxStudioNZ/"}>Facebook</Link>
                </li>
            <li><Link href={"https://www.instagram.com/sandboxstudionz/"}>Instagram</Link></li>
          </ul>
        </FooterList>
      </div>
    </div>
  );
}
