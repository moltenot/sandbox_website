import Link from "next/link";
import Image from "next/image";

export default function SocialLink({link, imageSrc, alt}) {
    const size = 30
    return <>
        <div>
            <Link href={link}>
                <Image src={imageSrc} alt={alt} height={size} width={size}/>
            </Link>
        </div>
    </>
}