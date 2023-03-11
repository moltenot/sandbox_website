import src from "./assets/f_logo_RGB-Black_58.png"
import SocialLink from "@/components/sociallinks/socialLink";

export default function Facebook({link}) {
    return <SocialLink link={link} alt={"facebook logo"} imageSrc={src}/>
}