import Image from "next/image";
import mastering from "@/public/journey/mastering.jpg";
import styles from "@/styles/albumShowcase.module.css";
import SubtleButton from "../subtleButton";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/hooks/windowDimensions";
import Album from "../album";

const ALBUMS = [
  {
    name: "Random Access Memories",
    artist: "Daft Punk",
  },
  {
    name: "Plastic Beach",
    artist: "Gorillaz",
  },
  {
    name: "Humanz",
    artist: "Gorillaz",
  },
  {
    name: "Cross",
    artist: "Justice",
  },
  {
    name: "Demonstrations",
    artist: "Clor",
  },
  {
    name: "Discovery",
    artist: "Daft Punk",
  },
  {
    name: "Audio, Video, Disco",
    artist: "Justice",
  },
  {
    name: "Space Is Only Noise",
    artist: "Nicolas Jaar",
  },
  {
    name: "Melophobia",
    artist: "Cage the Elephant",
  },
  {
    name: "The Fall",
    artist: "Gorillaz",
  },
  {
    name: "AM",
    artist: "Arctic Monkeys",
  },
  {
    name: "Kongos",
    artist: "Kongos",
  },
  {
    name: "10,000 Hz Legend",
    artist: "Air",
  },
  {
    name: "The Now Now",
    artist: "Gorillaz",
  },
  {
    name: "Aluminum Tunes",
    artist: "Stereolab",
  },
  {
    name: "Demonstrations II",
    artist: "Clor",
  },
  {
    name: "The Inevitable Rise and Liberation of NiggyTardust!",
    artist: "Saul Williams",
  },
  {
    name: "D-Sides",
    artist: "Gorillaz",
  },
  {
    name: "The Man-Machine",
    artist: "Kraftwerk",
  },
  {
    name: "Silent Shout",
    artist: "The Knife",
  },
  {
    name: "Everything You've Come to Expect",
    artist: "The Last Shadow Puppets",
  },
  {
    name: "Random Access Memories - Unboxed Edition",
    artist: "Daft Punk",
  },
  {
    name: "Discovery: Japan Exclusive Edition",
    artist: "Daft Punk",
  },
  {
    name: "The Ideal Crash",
    artist: "dEUS",
  },
  {
    name: "The Unforgettable Fire (Remastered)",
    artist: "U2",
  },
  {
    name: "Syro",
    artist: "Aphex Twin",
  },
  {
    name: "Geogaddi",
    artist: "Boards of Canada",
  },
  {
    name: "AM (Deluxe)",
    artist: "Arctic Monkeys",
  },
  {
    name: "Nite Versions",
    artist: "Soulwax",
  },
  {
    name: "Yoshimi Battles the Pink Robots",
    artist: "The Flaming Lips",
  },
  {
    name: "Homework",
    artist: "Daft Punk",
  },
  {
    name: "Illinois",
    artist: "Sufjan Stevens",
  },
];

const SIZE = 150;

export default function AlbumShowcase() {
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setMounted(true);
  }, []);

  let columns;
  if (width === 0) {
    columns = 10;
  } else {
    columns = Math.floor(width / SIZE);
  }
  console.log({ columns });
  const maxHeight = "60vh";

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        style={{
          maxHeight: expanded ? "none" : maxHeight,
          overflowY: expanded ? "visible" : "hidden",
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className={`${styles.buttoncontainer}`}>
          <SubtleButton
            text={expanded ? "see less" : "see more"}
            clickHandler={() => setExpanded(!expanded)}
          />
        </div>

        <h1 className="centred">SHOWCASE</h1>

        <div className="hflex">
          <div className="flex-pad" />
          <div
            className={styles.container}
            style={{
              display: mounted ? "flex" : "none",
              width: width === 0 ? "auto" : `${columns * SIZE}px`,
            }}
          >
            {ALBUMS.map((album) => (
              <Album
                key={album.name}
                size={SIZE}
                name={album.name}
                imageSrc={mastering}
                artist={album.artist}
                href={null}
              />
            ))}
          </div>
          <div className="flex-pad" />
        </div>
      </div>
    </>
  );
}
