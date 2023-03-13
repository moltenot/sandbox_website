import Navigation from "@/components/navigation";
import Insta from "@/components/sociallinks/insta";
import Facebook from "@/components/sociallinks/facebook";
import Website from "@/components/sociallinks/website";
import TeamMember, {IMAGE_DIM} from "@/components/teamMember";
import styles from "@/styles/team.module.css"
import useWindowDimensions from "@/hooks/windowDimensions";
import {useEffect, useState} from "react";

import benni from "@/public/people/benni.jpg"
import peter from "@/public/people/peter.jpg"
import ateo from "@/public/people/ateo.jpg"
import daniela from "@/public/people/daniela.jpg"
import briar from "@/public/people/briar.jpg"
import lorenzo from "@/public/people/lorenzo.jpg"

const FOH = [
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

const defaultBio = <p>Can put a bio here if they want</p>
const COOKS = [
    {
        imageSrc: ateo,
        name: "Ateo Buhne",
        role: "Drummer",
        links: [<Insta key={"ig"} link={"https://www.instagram.com/ateo.music/"}/>],
        bio: defaultBio
    },
    {
        imageSrc: daniela,
        name: "Daniela Mogin",
        role: "Pianist",
        links: [<Facebook link={"https://www.facebook.com/daniela.mogin"} key={"fb"}/>,
            <Insta link={"https://www.instagram.com/hey_dani_dani/"} key={"ig"}/>],
        bio: defaultBio
    },
    {
        imageSrc: briar,
        name: "Briar Prastiti",
        role: "Vocal Coach",
        links: [<Facebook key={"fb"} link={"https://www.facebook.com/briar.prastiti"}/>,
            <Insta key={"ig"} link={"https://www.instagram.com/hydrabitch/"}/>,
            <Website key={"web"} link={"https://www.briarprastiti.com/"}/>],
        bio: defaultBio
    },
    {
        imageSrc: lorenzo,
        name: "Lorenzo Buhne",
        role: "Mix Engineer",
        links: [<Facebook key={"fb"} link={"https://www.facebook.com/lorenzo.buhne.5"}/>],
        bio: defaultBio
    }
]

function TeamList({teamList, children}) {

    const columnWidth = IMAGE_DIM + 35 // roughly the width of a team member in pixels, maybe a bit more

    const {width} = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return null;

    const numberOfColumns = Math.floor(width / columnWidth)
    console.log("numberOfColumns", numberOfColumns)

    const numberOfRows = Math.ceil(teamList.length / numberOfColumns)
    if (numberOfRows === 0) return null;

    let rows = [];

    for (let i = 0; i < numberOfRows; i++) {

        let curRow = [];
        for (let j = 0; j < numberOfColumns; j++) {
            const index = i * numberOfColumns + j;
            if (index >= teamList.length) continue;
            curRow.push(<TeamMember key={i + numberOfColumns * j} {...teamList[i * numberOfColumns + j]}/>)
        }
        rows.push(
            <div className={`${styles.personrow} hflex`} key={i}>
                <div className={"flex-pad"}/>
                {curRow}
                <div className={"flex-pad"}/>
            </div>
        )
    }

    return (
        <>
            <div className={"centred cont-md"}>
                {children}
            </div>
            <div>
                {rows}
            </div>
        </>
    )
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
