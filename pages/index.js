import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import guitars from "@/public/guitars.jpg";
import TextColumnImageColumn from "@/components/sections/textcolumnimagecolumn";

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
          <p>a bit more space to add stuff here</p>
        </TextColumnImageColumn>
      </Navigation>
    </>
  );
}
