import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* DESKTOP HERO */}
      <div className="w-[screen] relative ">
        {/* HERO TEXT */}
        <div className="flex flex-row absolute justify-around items-center m-auto w-full top-[45%] text-white py-1 hover:bg-red-600 hover:text-black hover:mix-blend-hard-light transition-all">
          <h2 className="animate-fade  font-bold  text-8xl uppercase italic max-lg:hidden lg:text-7xl ">
            Durable
          </h2>
          <h2 className="animate-fade  font-bold text-8xl uppercase italic max-lg:hidden lg:text-7xl">
            Dumbbells
          </h2>
        </div>
        <h3 className="absolute mx-auto top-[85%] w-full h-full z-50 text-center text-zinc-300 uppercase font-bold text-3xl animate-fade hover:text-white hover:tracking-widest transition-all max-lg:hidden">
          Dumbbells made to last
          <hr className="w-96 m-auto" />
        </h3>
        <Image
          src={`/images/hero.png`}
          alt="Product Image"
          width={1400}
          height={647}
          priority={true}
          className="max-lg:hidden -z-50 bg-cover w-full max-xl:top-[70px]"
        />
      </div>
      {/* MOBILE HERO */}
      <Image
        src={`/images/hero-for-mobile.png`}
        alt="Product Image"
        width={430}
        height={863}
        priority={true}
        className="lg:hidden absolute -z-50 bg-cover w-full max-xl:top-[70px]"
      />
      <span className="flex justify-center p-5 text-center text-2xl">
        WORK IN PROGRESS! &#128679;
      </span>
    </main>
  );
}
