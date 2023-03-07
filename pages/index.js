import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import guitars from "@/public/guitars.jpg";
import TextColumnImageColumn from "@/components/sections/textcolumnimagecolumn";
import HorizontalCards from "@/components/sections/horizontalCards";
import TallCard from "@/components/tallCard";

import pre_production from "@/public/journey/pre_production.jpg";
import production from "@/public/journey/production.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation>
        <Hero />
        <TextColumnImageColumn alt="guitars on a wall" image={guitars}>
          <h1>Welcome to Sandbox Studios</h1>
          <p>
            Located in the heart of Wellington City, we deliver a complete range
            of audio and music production services. Are you looking to record
            music, podcasts, audiobooks, dialogue, or voice overs? Sandbox
            Studio makes your production fast, reliable, and affordable.
          </p>
          <p>
            If you’re looking for a low-key comfortable space to be creative and
            if you’re looking to combine this with audiophile goodness and
            supportive people who work fast, reliable and know every inch of
            their craft, then Sandbox Studio is your ticket to success.
          </p>
        </TextColumnImageColumn>
        <HorizontalCards
          cards={[
            <TallCard
              key={"pre"}
              imageSrc={pre_production}
              alt={"a photo of a rack of pedals"}
              header={"Pre Production"}
              paragraph="we do preproduction"
            >
            </TallCard>,
            <TallCard
            key={"prod"}
            imageSrc={production}
            alt="photo of a computer screen running a DAW"
            header={"Production"}
            paragraph="we also produce"/>
          ]}
        >
          <h2>Your journey, from start to end</h2>
          <p>We cover the complete cycle of audio production</p>
        </HorizontalCards>
      </Navigation>
    </>
  );
}
