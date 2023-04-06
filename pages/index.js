import Hero from "@/components/sections/hero";
import guitars from "@/public/guitars.jpg";
import TextColumnImageColumn from "@/components/sections/textcolumnimagecolumn";
import Link from "next/link";
import Facebook from "@/components/sociallinks/facebook";
import Insta from "@/components/sociallinks/insta";
import Website from "@/components/sociallinks/website";
import benni from "@/public/people/benni.jpg"
import peter from "@/public/people/peter.jpg"
import TeamMember from "@/components/teamMember";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BasicSection from "@/components/sections/basicSection";
import ReactAudioPlayer from "react-audio-player";

// import audio1 from "@/public/audio/bensound-adayout.mp3"
// import audio2 from "@/public/audio/Corwin Trails - Pop.mp3"
// import audio3 from "@/public/audio/Metal Mountains - Structures In The Sun.mp3"
// import audio4 from "@/public/audio/Rock Monsieur - tututu lalala.mp3"

const people = [
    {
        imageSrc: benni,
        name: "Benni Krueger",
        role: "Engineer | CEO | Founder",
        links: [<Facebook key={"fb"} link={"https://www.facebook.com/benni.krueger/"}/>,
            <Insta key={"ig"} link={"https://www.instagram.com/bennikrueger.art/"}/>,
            <Website link={"https://bennikrueger.com/"} key={"web"}/>],
        bio: <p>Benni Krueger is a co-founder of Sandbox Studio and an accomplished audio engineer with a passion for
            music. His technical expertise in audio production and dedication to excellence have helped establish
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Sandbox Studio as a premier recording facility. Benni's contributions to the music community have been
            widely recognized, and he continues to inspire aspiring audio engineers and musicians with his talent and
            commitment. </p>
    },
    {
        imageSrc: peter,
        name: "Peter Molteno",
        role: "Engineer | COO | Co-founder",
        links: [<Insta key={"ig"} link={'https://www.instagram.com/__petes_produce_/'}/>],
        bio: <div>
            <p>Peter is an audio engineer and co-founder of Sandbox Studio. His expertise in analogue audio processing
                has helped the studio develop a signature warm and rich sound, setting it apart from other recording
                facilities.
            </p>
        </div>

    }
]

export default function Home() {
    const sections = ["welcome", "people", "gear", "listen", "menu", "contact"]
    return (
        <>
            <Navbar sections={sections}/>
            <Hero/>
            <section id="welcome">
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
            </section>
            <BasicSection id="people" header="Meet the team" backgroundColor={"gray"}>
                <p>Sandbox Studio is jointly run by studio engineers Benni Krueger and Peter Molteno
                </p>
                <TeamMember {...people[0]}/>
                <TeamMember {...people[1]}/>
            </BasicSection>
            <BasicSection id={"gear"} header={"Gear"} backgroundColor={"white"}>
                <p>a few pieces of nice gear that we have, and a button to the gear page</p>
                <Link href={"/gear"}>Check out the full gear list</Link>
            </BasicSection>
            <BasicSection id="listen" header={"Listen"} backgroundColor={"gray"}>
                <p>Check out some of the sounds that have gone through the Sandbox Studio</p>
                <ReactAudioPlayer controls src={"/audio/bensound-adayout.mp3"}/>
            </BasicSection>
            <section id="menu">
                <h1>Pricing</h1>
                <p>A few things you can buy from us</p>
                <Link href={"/menu.pdf"}>See the full menu</Link>
            </section>
            <section id="contact">
                <h1>Contact</h1>
                <p>Contact us now to get your project on the road</p>
            </section>
            <Footer/>
        </>
    );
}
