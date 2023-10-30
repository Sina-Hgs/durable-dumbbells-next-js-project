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
        className="max-lg:hidden"
        style={{
          width: "100vw",
          height: "100vh",
          top: "0",
          objectFit: "cover",
        }}
      />
      {/* <Image
        src={`/images/title.png`}
        alt="Product Title"
        width={1207}
        height={334}
        priority={true}
        style={{
          width: "90vw",
          position: "absolute",
          top: "40vh",
          left: "9%",
          objectFit: "cover",
        }}
        className="animate-fade max-lg:hidden"
      /> */}
      <h2 className="animate-fade text-white font-bold absolute top-[45vh] left-16 ml-3 text-8xl uppercase italic hover:text-zinc-300 transition-all">
        Durable
      </h2>
      <h2 className="animate-fade text-white font-bold absolute top-[45vh] right-4 mr-3 text-8xl uppercase italic hover:text-zinc-300 transition-all">
        Dumbbells
      </h2>
      <h3 className="absolute bottom-10 w-screen text-center text-zinc-300 uppercase font-bold text-3xl">
        Dumbbells made to last
        <hr className="w-96 m-auto" />
      </h3>
    </main>
  );
}
