import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation>
        <Hero/>
      </Navigation>
    </>
  );
}
