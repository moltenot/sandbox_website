import Navigation from "@/components/navigation";
import Insta from "@/components/sociallinks/insta";
import Facebook from "@/components/sociallinks/facebook";
import Website from "@/components/sociallinks/website";
import TeamMember from "@/components/teamMember";
import benni from "@/public/people/benni.jpg"
import peter from "@/public/people/peter.jpg"
import styles from "@/styles/team.module.css"
import useWindowDimensions from "@/hooks/windowDimensions";
import {useEffect, useState} from "react";

const FOH = [
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

function TeamList({teamList, children}) {
    const {width} = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return null;

    const mobile = width < 768

    let teamListRender;
    if (teamList.length === 0) return null;
    if (mobile) {
        teamListRender = teamList.map(person => {
            return <div key={person.name} className={"hflex"}>
                <div className={"flex-pad"}/>
                <TeamMember {...person} />
                <div className={"flex-pad"}/>
            </div>
        })
    } else {
        teamListRender = <div className={`hflex ${styles.teamlistdesktop}`}>
            <div className={"flex-pad"}/>
            {teamList.map(person => <  TeamMember key={person.name} {...person} />)}
            <div className={"flex-pad"}/>
        </div>
    }

    return (
        <>
            <div className={"centred cont-md"}>
                {children}
            </div>
            <div>
                {teamListRender}
            </div>
        </>
    )
        ;
}

export default function Team() {
    return (
        <>
            <Navigation>
                <TeamList teamList={FOH}>
                    <h1>FRONT OF HOUSE</h1>
                    <p className="justified">The hospitality at Sandbox is unmatched, and our front of house staff have
                        years of
                        experience
                        helping you make excellent tunes</p>
                </TeamList>

                <TeamList teamList={COOKS}>
                    <h1>COOKS</h1>
                    <p>To help you achieve your culinary goals we have a variety of chefs who are masters of their
                        craft</p>
                </TeamList>

            </Navigation>
        </>
    );
}
