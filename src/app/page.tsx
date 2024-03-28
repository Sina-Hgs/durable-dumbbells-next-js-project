import Image from "next/image";

export default function Home() {
  return (
    <main className="max-lg:top-[55px]">
      <div className="w-[screen] relative">
        {/* HERO TEXT */}
        <div
          className="flex flex-row absolute justify-around items-center m-auto w-full overflow-hidden top-[45%] text-white select-none py-1 hover:bg-red-600 hover:text-black hover:mix-blend-hard-light  
        hover:tracking-[5px]
        transition-all max-md:flex-col max-md:justify-center max-md:top-[60%] max-md:items-center"
        >
          <h2 className="animate-fade  font-bold  text-7xl uppercase italic max-xl:text-5xl ">
            Durable
          </h2>
          <h2 className="animate-fade  font-bold text-7xl uppercase italic max-xl:text-5xl ">
            Dumbbells
          </h2>
        </div>
        <h3 className="absolute mx-auto top-[85%] w-full  text-center text-zinc-300 uppercase font-bold text-3xl animate-fade hover:text-white select-none hover:tracking-widest transition-all max-xl:text-xl max-xl:font-semibold ">
          Dumbbells made to last
          <hr className="w-96 max-md:w-[80%] m-auto" />
        </h3>
        {/* DESKTOP HERO IMAGE */}
        <Image
          src={`/images/hero.png`}
          alt="Product Image"
          width={1400}
          height={647}
          priority={true}
          className="max-md:hidden -z-50 bg-cover w-full"
        />
        {/* MOBILE HERO IMAGE */}
        <Image
          src={`/images/hero-for-mobile.png`}
          alt="Product Image"
          width={430}
          height={863}
          priority={true}
          className="md:hidden -z-50 bg-cover w-full "
        />
      </div>

      <span className="flex justify-center p-5 text-center text-2xl ">
        WORK IN PROGRESS! &#128679;
      </span>
    </main>
  );
}
