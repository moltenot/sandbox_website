import src from "./assets/Instagram_simple_icon.svg"
import SocialLink from "@/components/sociallinks/socialLink";

export default function Insta({link}) {
    return <SocialLink link={link} alt={"instagram logo"} imageSrc={src}/>
}