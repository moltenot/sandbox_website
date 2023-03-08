import Image from "next/image";

export default function Album({ name, imageSrc, artist, href, size }) {
  return (
    <div style={{position: "relative"}}>
      <div style={{position: "absolute", color: "white", fontWeight: "bold", backgroundColor: "black"}}>{name}<br/> {artist}</div>
      <Image
        src={imageSrc}
        width={size}
        height={size}
        alt={`Album art for ${name}`}
        style={{objectFit: "cover"}}
      />
    </div>
  );
}
