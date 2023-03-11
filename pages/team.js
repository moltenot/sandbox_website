import Navigation from "@/components/navigation";
import Insta from "@/components/sociallinks/insta";
import Facebook from "@/components/sociallinks/facebook";
import Website from "@/components/sociallinks/website";
import TeamMember from "@/components/teamMember";
import benni from "@/public/people/benni.jpg"
import peter from "@/public/people/peter.jpg"

const FOH = [
    {
        imageSrc: peter,
        name: "Peter Molteno",
        role: "Engineer | COO | Co-founder",
        links: [<Insta key={"ig"} link={'https://www.instagram.com/__petes_produce_/'}/>],
        bio: <div>
            <p>Peter is an audio engineer and co-founder of Sandbox Studio. His expertise in analogue audio processing has helped the studio develop a signature warm and rich sound, setting it apart from other recording facilities.
            </p>
        </div>

    },
    {
        imageSrc: benni,
        name: "Benni Krueger",
        role: "Engineer | CEO | Founder",
        links: [<Facebook key={"fb"} link={"https://www.facebook.com/benni.krueger/"}/>,
            <Insta key={"ig"} link={"https://www.instagram.com/bennikrueger.art/"}/>,
            <Website link={"https://bennikrueger.com/"} key={"web"}/>],
        bio: <p>Benni Krueger is a co-founder of Sandbox Studio and an accomplished audio engineer with a passion for
            music. His technical expertise in audio production and dedication to excellence have helped establish
            Sandbox Studio as a premier recording facility. Benni's contributions to the music community have been
            widely recognized, and he continues to inspire aspiring audio engineers and musicians with his talent and
            commitment. </p>
    }
]

const COOKS = [
    {
        name: "Ateo Buhne",
        role: "Drummer",
        links: [<Insta key={"ig"} link={"https://www.instagram.com/ateo.music/"}/>]
    },
    {
        name: "Daniela Mogin",
        role: "Pianist",
        links: [<Facebook link={"https://www.facebook.com/daniela.mogin"} key={"fb"}/>,
            <Insta link={"https://www.instagram.com/hey_dani_dani/"} key={"ig"}/>]
    }
]

export default function Team() {
    const testPerson = FOH[1]
    const {name, role, links, bio, imageSrc} = testPerson
    return (
        <>
            <Navigation>
                <h1>FRONT OF HOUSE</h1>
                {FOH.map(person => <TeamMember key={person.name} {...person} /> )}
                <h1>COOKS</h1>
                {COOKS.map(person => <TeamMember key={person.name} {...person} /> )}

            </Navigation>
        </>
    );
}
