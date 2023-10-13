import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src={`/images/hero.png`}
        alt="Product Image"
        width={1440}
        height={647}
        priority={true}
        style={{ width: "100vw", top: "0" }}
      />
      <Image
        src={`/images/title.png`}
        alt="Product Title"
        width={1207}
        height={334}
        priority={true}
        style={{
          width: "90vw",
          position: "absolute",
          top: "17vw",
          left: "9%",
        }}
        className="animate-fade hover:scale-x-105 transition-all"
      />
    </main>
  );
}
