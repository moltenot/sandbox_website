import Image from "next/image";

export default function TallCard({ imageSrc, alt, header, paragraph }) {
  return (
    <>
      <div>
        <Image src={imageSrc} alt={alt} height={200} width={200} />
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
    </>
  );
}
