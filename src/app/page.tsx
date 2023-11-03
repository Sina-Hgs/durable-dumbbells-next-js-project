import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* DESKTOP HERO */}
      <Image
        src={`/images/hero.png`}
        alt="Product Image"
        width={1400}
        height={647}
        priority={true}
        className="max-sm:hidden absolute bg-cover w-screen max-xl:top-[70px]"
      />

      {/* MOBILE HERO */}
      <Image
        src={`/images/hero-for-mobile.png`}
        alt="Product Image"
        width={430}
        height={863}
        priority={true}
        className="sm:hidden"
        style={{
          position: "absolute",
          width: "100vw",
          top: "70px",
          objectFit: "fill",
        }}
      />

      <h2 className="animate-fade text-white font-bold absolute top-[45vh] left-16 ml-3 text-8xl uppercase italic hover:bg-white hover:text-black hover:px-5 hover:py-1 transition-all max-lg:hidden lg:text-7xl">
        Durable
      </h2>
      <h2 className="animate-fade text-white font-bold absolute top-[45vh] right-4 mr-3 text-8xl uppercase italic hover:bg-white hover:text-black hover:px-5 hover:py-1 transition-all max-lg:hidden lg:text-7xl">
        Dumbbells
      </h2>
      <h3 className="absolute bottom-10 w-screen text-center text-zinc-300 uppercase font-bold text-3xl animate-fade hover:text-white hover:tracking-widest transition-all max-lg:hidden">
        Dumbbells made to last
        <hr className="w-96 m-auto" />
      </h3>
    </main>
  );
}
