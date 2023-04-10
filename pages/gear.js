import Navigation from "@/components/navigation";
import Grid from "@/components/grid";
import HeaderWithImage from "@/components/sections/headerWithImage";

import drumming from "@/public/drumming.jpg"
import Head from "next/head";

const INSTRUMETS = [
    {
        header: "Piano",
    },
    {
        header: "Guitar",
    },
    {
        header: "Drums",
    }
]

const SOFTWARE = [
    {
        header: "DAW's",
    },
    {
        header: "Plugins"
    }
]

const HARDWARE = {
    "Microphones": [
        "Neumann U87",
        "AKG C414",
        "Shure KSM9",
        "Sennheiser MK8",
        "Royer R-121",
        "Audio-Technica AT4050",
        "Bock Audio 251",
        "Telefunken U47",
        "Earthworks QTC50",
        "AEA R44CXE"
    ],
    "Preamps": [
        "Neve 1073",
        "API 312",
        "Universal Audio 610",
        "Chandler Limited TG2",
        "Millennia HV-3D",
        "A-Designs Pacifica",
        "Rupert Neve Designs Portico II",
        "Grace Design m108",
        "Shadow Hills Industries GAMA",
        "Solid State Logic VHD Pre"
    ],
    "Compressors": [
        "Universal Audio LA-2A",
        "Empirical Labs Distressor",
        "Fairchild 670",
        "SSL G Series Bus Compressor",
        "dbx 160",
        "Tube-Tech CL 1B",
        "UREI 1176",
        "API 2500",
        "Manley Variable Mu",
        "Chandler Limited REDD.47"
    ],
    "Equalisers, De-essers & Saturators": [
        "Maag Audio EQ4M",
        "SPL De-Esser",
        "Aphex Aural Exciter",
        "Pultec EQP-1A",
        "Dangerous Music BAX EQ",
        "Elysia xpressor 500",
        "Thermionic Culture Vulture",
        "Tube-Tech SMC 2B",
        "API 5500 Dual EQ",
        "Kush Audio Clariphonic"
    ]
}


function GearList({title, list}) {
    return (
        <>
            <div style={{
                width: "300px",
                maxWidth: "400px",
                flex: "auto",
            }}>
                <div style={{
                    backgroundColor: "var(--light-gray)",
                    margin: "5px",
                    padding: "1rem"
                }}>
                    <h2>{title}</h2>
                    <ul>
                        {list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default function Gear() {
    return (
        <>
            <Head>
                <title>Gear List · Sandbox Studios  </title>
            </Head>
            <HeaderWithImage imageSrc={drumming} alt={"drumming"} headerText={"Gear List"}/>

            <div className="cont-md">
                <p>Sandbox Studio is a recording facility in New Zealand that boasts an extensive collection of
                    analogue recording equipment, including 150 microphones, 30 preamps, and 20 processors. The
                    studio features renowned brands such as Neumann, Neve, SSL, Sony, Universal Audio, Focusrite,
                    and Trident Audio Developments</p>
                <p>In addition to the impressive hardware, Sandbox Studio offers an online recording option through
                    Source Connect, providing direct, latency-free hi-res stream connections to 50,000 studios
                    worldwide. The studio is committed to supporting the local music scene and offers affordable
                    artist and voiceover rates, as well as package deals. With Sandbox Studio, musicians can access
                    sought-after recording equipment and technology that is not available elsewhere in New Zealand,
                    while also receiving quality, affordable services.</p>
            </div>

            <Grid width={400}>
                <GearList title="Microphones" list={HARDWARE.Microphones}/>
                <GearList title="Preamps" list={HARDWARE.Preamps}/>
                <GearList title="Compressors" list={HARDWARE.Compressors}/>
                <GearList title="Equalisers, De-essers & Saturators"
                          list={HARDWARE["Equalisers, De-essers & Saturators"]}/>
            </Grid>
        </>
    );
}
