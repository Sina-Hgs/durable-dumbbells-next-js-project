"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <nav className="w-screen h-[70px] bg-black bg-opacity-90 text-white border-b border-white flex justify-between items-center px-4 max-md:px-2">
      <Link href={""} className="flex flex-row items-center">
        <Image
          src={"logo.svg"}
          alt="site logo"
          width={45}
          height={45}
          className="transition-all hover:scale-110 max-sm:w-7"
        />
        <h1 className="text-3xl uppercase font-bold italic tracking-[4.60px] ml-3 hover:tracking-[6px] transition-all max-sm:text-xl">
          Durable Dumbbells
        </h1>
      </Link>

      {/* DESKTOP NAV */}
      <div className="flex flex-row items-center justify-between w-80 max-lg:hidden">
        <Link
          href={"#"}
          className="underline-offset-4 hover:underline transition-all hover:scale-105"
        >
          Reviews
        </Link>
        <Link
          href={"#"}
          className="underline-offset-4 hover:underline transition-all hover:scale-105"
        >
          Our Product
        </Link>
        <Link href={"#"}>
          <button className="px-6 uppercase font-bold text-xl bg-red-800 rounded-[37px] border-2 border-red-950 hover:bg-red-950 hover:border-red-800 transition-all hover:scale-105">
            Shop
          </button>
        </Link>
      </div>

      {/* MOBILE NAV */}
      <button
        className="lg:hidden text-2xl"
        onClick={() =>
          display == "hidden" ? setDisplay("flex") : setDisplay("hidden")
        }
      >
        <FaBars />
      </button>
      <div
        id="mobile-nav"
        className={`text-xl absolute z-50 right-0 top-[70px] bottom-0 w-40 pl-5 ${display} flex-col justify-start items-start bg-black bg-opacity-90 border-b border-white`}
      >
        <Link
          href={"#"}
          className="underline-offset-4 py-5 active:underline transition-all active:scale-105"
        >
          Reviews
        </Link>
        <Link
          href={"#"}
          className="underline-offset-4 py-4 active:underline transition-all active:scale-105"
        >
          Our Product
        </Link>
        <Link href={"#"}>
          <button className="py-4 uppercase font-bold text-2xl text-red-600 underline-offset-4 active:underline active:tracking-[6px] active:italic transition-all">
            Shop
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
