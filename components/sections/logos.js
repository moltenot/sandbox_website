import Image from "next/image";

// all the logos are retrieved from public/clients
const PREFIX = "/clients/";
const LOGOS = [
    [
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
    ],
    [
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
    ],
    [
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
        "Toi-Ohomai-Institute-of-Technology-Logo-White.jpg",
    ],
];
const SIZE = 100;

function LogoRow({logoList}) {
    return (
        <div className="hflex" style={{
            marginLeft: "50vw", translate: "-50%",
            width: "fit-content"
        }}>
            <div className="flex-pad"/>
            {logoList.map((l) =>
                (
                    <div key={l}>
                        <Image
                            src={PREFIX + l}
                            alt={`logo for ${l}`}
                            width={SIZE}
                            height={SIZE}
                        />
                    </div>
                ))}
            <div className="flex-pad"/>
        </div>
    );
}

export default function Logos() {
    let logoLists = [];
    for (let i = 0; i < LOGOS.length; i++) {
        logoLists.push(<LogoRow key={i} logoList={LOGOS[i]}/>);
    }
    return (
        <>
            <div style={{overflowX: "hidden"}}>
                <h1 className="centred">CLIENTS</h1>
                {logoLists}
            </div>
        </>
    );
}
