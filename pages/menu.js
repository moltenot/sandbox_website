import Navigation from "@/components/navigation";
import useWindowDimensions from "@/hooks/windowDimensions";
import styles from "@/styles/menu.module.css";
import { useEffect, useState } from "react";

function MenuItem({ name, description, price, tooltip }) {
  return (
    <div className={styles.menuitem}>
      <div className={styles.menuitemleft}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className={`vflex ${styles.menuitemright}`}>
        <div className="flex-pad" />
        <div className={styles.price}>{price}</div>
        <div className="flex-pad" />
        <div className={styles.tooltip}>{tooltip}</div>
      </div>
    </div>
  );
}

const foodToolTip =
  "*Prices include up to 3 revisions. Additional revisions $95.";

export default function Menu() {

  const [mounted, setMounted] = useState(false)
  const {width, height} = useWindowDimensions()

  useEffect(() => setMounted(true), [])

  const breakpoint = 480
  const singleColumn = width < breakpoint


  if (!mounted) return <div/>

  return (
    <>
      <Navigation>
        <div className="cont-lg">
          <h1 className="centred">Menu</h1>
          <div className={`${styles.container}`} >
            <div className="flex-pad"/>
            <div id="food">
              <h2 className="centred">FOOD</h2>
              <ol>
                <li>
                  <MenuItem
                    name="SONG - BAND"
                    description={
                      "Live recording, editing, mixing and mastering."
                    }
                    price={950}
                  />
                </li>
                <li>
                  <MenuItem
                    name={"SONG - SOLO"}
                    description="Live recording, editing, mixing and mastering."
                    price={800}
                  />
                </li>
                <li>
                  <MenuItem
                    name={"VOCAL"}
                    description="Recording, editing & tuning (per person)."
                    price={300}
                  />
                </li>
                <li>
                  <MenuItem
                    name={"INSTRUMENT"}
                    description="Recording & editing (per instrument)."
                    price={200}
                  />
                </li>
              </ol>


              <ol>
                <li>
                  <MenuItem
                    name={"MIX"}
                    description="Master-ready hybrid analog/digital mix.
Price per song (<40 stems)."
                    price={550}
                    tooltip={foodToolTip}
                  />
                </li>
                <li>
                  <MenuItem
                    name={"MASTER"}
                    description="Preparation of stereo audio file for streaming,
CD, or Vinyl."
                    price={150}
                    tooltip={foodToolTip}
                  />
                </li>
              </ol>
            </div>

            <div className="flex-pad" style={{maxWidth: "25px"}}/>

            <div id="drinks">
              <h2 className="centred">DRINKS</h2>
              <ol>
                <li>
                  <MenuItem
                    name={"COVER ART"}
                    description="Cover art for use on digital platforms."
                    price={350}
                  />
                </li>
                <li>
                  <MenuItem
                    name={"PRINT"}
                    description="Artwork formatted for CD or Vinyl, including sleeve."
                    price={350}
                  />
                </li>
                <li>
                  <MenuItem
                    name={"BOOKLET"}
                    description="8-page booklet layout for CD innner."
                    price={350}
                  />
                </li>
              </ol>

              <ol>
                <li>
                  <MenuItem
                    name="PHOTOGRAPHY"
                    description={"10 graded hi-res/web-res portrait photos."}
                    price={350}
                  />
                </li>
                <li>
                  <MenuItem
                    name="POSTER"
                    description={"Print-ready A3 promotional poster design."}
                    price={150}
                  />
                </li>
                <li>
                  <MenuItem
                    name="SOCIALS"
                    description={
                      "Print-ready A3 poster, Social Media post, story & event banner design (Animated +$100)"
                    }
                    price={250}
                  />
                </li>
                <li>
                  <MenuItem
                    name="EPK"
                    description={"Layout of Electronic Press Kit document."}
                    price={150}
                  />
                </li>
              </ol>
            </div>
            <div className="flex-pad"/>
          </div>
        </div>
      </Navigation>
    </>
  );
}
