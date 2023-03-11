import styles from "@/styles/footer.module.css";
import Link from "next/link";
import FooterList from "./footerlist";
export default function Footer() {
  return (
    <div className={styles.root}>
      <hr/>
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
              <Link href={"https://goo.gl/maps/N9ZaakdjiycQz8VM6"}>
                Floor 9, 104 The Terrace <br /> Wellington, 6011 <br /> New
                Zealand
              </Link>
            </li>
          </ul>
        </FooterList>
        <FooterList headerText={"Contact"}>
          <ul>
            <li>
              <Link href={"tel:0800 788346"}>0800 STUDIO</Link>
            </li>
            <li>
              <Link href={"mailto:sandboxstudionz@gmail.com"}>
                sandboxstudionz@gmail.com
              </Link>
            </li>
          </ul>
        </FooterList>
        <FooterList headerText={"Social"}>
          <ul>
            <li>
              <Link href={"https://www.facebook.com/SandboxStudioNZ/"}>
                Facebook
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/sandboxstudionz/"}>
                Instagram
              </Link>
            </li>
          </ul>
        </FooterList>
      </div>
      <div className="centred smaller">
        SANDBOX STUDIO LIMITED - COMPANY # 6516112 | NZBN 9429046425065 · ALL
        RIGHTS RESERVED 2017 - 2099
      </div>
    </div>
  );
}
