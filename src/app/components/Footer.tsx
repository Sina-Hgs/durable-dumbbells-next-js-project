import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bottom-0 h-36 w-full bg-black border-t-4 border-red-950 text-white flex flex-row justify-between items-center px-7 py-5 max-md:flex-col max-md:px-2">
      {/* SITE LOGO AND BRANDNAME */}
      <div className="flex flex-row items-center ">
        <Image
          src={"logo.svg"}
          alt="site logo"
          width={40}
          height={40}
          className="max-sm:w-7"
        />
        <h1 className="text-2xl uppercase font-bold italic tracking-widest ml-3 max-lg:text-2xl max-sm:text-lg">
          Durable Dumbbells
        </h1>
      </div>
      <Link
        href={"https://github.com/Sina-Hgs/durable-dumbbells-next-js-project"}
        target="_blank"
      >
        <FaGithub className="text-[#A60000] text-5xl ring-white rounded-full ring-offset-1 hover:p-1 hover:ring-1 transition-all" />
      </Link>
    </footer>
  );
};

export default Footer;
