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
        className="max-sm:hidden absolute -z-50 bg-cover w-full max-xl:top-[70px]"
      />

      {/* HERO TEXT */}
      <div className="w-[screen] relative top-[45vh] flex flex-col justify-between">
        <div className="flex flex-row justify-between mx-12 relative  ">
          <h2 className="animate-fade text-white font-bold  text-8xl uppercase italic hover:bg-white hover:text-black hover:px-5 hover:py-1 transition-all max-lg:hidden lg:text-7xl">
            Durable
          </h2>
          <h2 className="animate-fade text-white font-bold  text-8xl uppercase italic hover:bg-white hover:text-black hover:px-5 hover:py-1 transition-all max-lg:hidden lg:text-7xl">
            Dumbbells
          </h2>
        </div>
        <h3 className="pt-24 text-center text-zinc-300 uppercase font-bold text-3xl animate-fade hover:text-white hover:tracking-widest transition-all max-lg:hidden">
          Dumbbells made to last
          <hr className="w-96 m-auto" />
        </h3>
      </div>

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
    </main>
  );
}
