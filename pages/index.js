import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import guitars from "@/public/guitars.jpg";
import TextColumnImageColumn from "@/components/sections/textcolumnimagecolumn";
import HorizontalCards from "@/components/sections/horizontalCards";
import TallCard from "@/components/tallCard";

import pre_production from "@/public/journey/pre_production.jpg";
import production from "@/public/journey/production.jpg";
import post_production from "@/public/journey/post_production.jpg";
import mastering from "@/public/journey/mastering.jpg";
import Logos from "@/components/sections/logos";


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
            ></TallCard>,
            <TallCard
              key={"prod"}
              imageSrc={production}
              alt="photo of a computer screen running a DAW"
              header={"Production"}
              paragraph="we also produce, check out pete's produce for the details"
            />,
            <TallCard
              key={"post"}
              imageSrc={post_production}
              alt="photo of an on air sign"
              header="Post Production"
              paragraph="we can do post production"
            />,
            <TallCard
              key={"mastering"}
              imageSrc={mastering}
              alt="photo from behind a desk"
              header={"Mastering"}
              paragraph="we can master the hell out of your song, try us I dare you"
            />,
            <TallCard
              key={"packaging"}
              imageSrc={mastering}
              alt="packaging and design image"
              header={"Packaging & Design"}
              paragraph="Packaging & Design"
            />,
            <TallCard
              key={"release"}
              imageSrc={mastering}
              alt="release image"
              header={"Release"}
              paragraph="Release Plan
            Streaming Platforms
            Marketing & Promo"
            />,
          ]}
        >
          <h1>
            <span className="italics">Your</span> journey, from start to end
          </h1>
          <p>
            Discover a seamless journey from pre-production to release with our
            music studio. Our team of experts will help you refine your sound in
            the pre-production stage and assist you in delivering a polished
            final product. Let us elevate your music to the next level with our
            tailored approach.
          </p>
        </HorizontalCards>
        <Logos />
      </Navigation>
    </>
  );
}
