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

]

const COOKS = [
    {
        imageSrc: ateo,
        name: "Ateo Buhne",
        role: "Drummer",
        links: [<Insta key={"ig"} link={"https://www.instagram.com/ateo.music/"}/>],
    },
    {
        imageSrc: daniela,
        name: "Daniela Mogin",
        role: "Pianist",
        links: [<Facebook link={"https://www.facebook.com/daniela.mogin"} key={"fb"}/>,
            <Insta link={"https://www.instagram.com/hey_dani_dani/"} key={"ig"}/>],
    },
    {
        imageSrc: briar,
        name: "Briar Prastiti",
        role: "Vocal Coach",
        links: [<Facebook key={"fb"} link={"https://www.facebook.com/briar.prastiti"}/>,
            <Insta key={"ig"} link={"https://www.instagram.com/hydrabitch/"}/>,
            <Website key={"web"} link={"https://www.briarprastiti.com/"}/>],
    },
    {
        imageSrc: lorenzo,
        name: "Lorenzo Buhne",
        role: "Mix Engineer",
        links: [<Facebook key={"fb"} link={"https://www.facebook.com/lorenzo.buhne.5"}/>],
    }
]

function TeamList({teamList, children}) {

    const columnWidth = IMAGE_DIM + 35 // roughly the width of a team member in pixels, maybe a bit more

    const {width} = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        // render just the first person in the list
        const firstPerson = teamList[0]
        return (<>
                <div className={"centred cont-md"}>
                    {children}
                </div>
                <div className={"hflex"}>
                    <div className={"flex-pad"}/>
                    <TeamMember {...firstPerson}/>
                    <div className={"flex-pad"}/>
                </div>
            </>
        )

    }

    const numberOfColumns = Math.floor(width / columnWidth)

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
                </TeamList>

                <TeamList teamList={COOKS}>
                </TeamList>

            </Navigation>
        </>
    );
}
