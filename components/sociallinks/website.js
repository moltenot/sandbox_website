import src from "./assets/web.png"
import SocialLink from "@/components/sociallinks/socialLink";

export default function Website({link}) {
    return <SocialLink link={link} alt={"website icon"} imageSrc={src}/>
}